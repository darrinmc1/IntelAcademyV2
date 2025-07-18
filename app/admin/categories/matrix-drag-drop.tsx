"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface Category {
  id: string
  name: string
  color: string
  relationships: CategoryRelationship[]
}

interface CategoryRelationship {
  type: "parent" | "related" | "prerequisite" | "successor"
  targetId: string
}

interface MatrixDragDropProps {
  categories: Category[]
  onAddRelationship: (sourceId: string, targetId: string, type: CategoryRelationship["type"]) => void
  getRelationshipLabel: (type: string) => string
  getRelationshipColor: (type: string) => string
}

export default function MatrixDragDrop({
  categories,
  onAddRelationship,
  getRelationshipLabel,
  getRelationshipColor,
}: MatrixDragDropProps) {
  const [dragStart, setDragStart] = useState<{ id: string; x: number; y: number } | null>(null)
  const [dragEnd, setDragEnd] = useState<{ id: string; x: number; y: number } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragLine, setDragLine] = useState<{ x1: number; y1: number; x2: number; y2: number } | null>(null)
  const [relationshipType, setRelationshipType] = useState<CategoryRelationship["type"]>("related")
  const [hoverCell, setHoverCell] = useState<{ rowId: string; colId: string } | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const tableRef = useRef<HTMLTableElement>(null)

  // Reset drag state when categories change
  useEffect(() => {
    setDragStart(null)
    setDragEnd(null)
    setIsDragging(false)
    setDragLine(null)
  }, [categories])

  // Handle mouse move during drag
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart || !svgRef.current || !tableRef.current) return

    const rect = tableRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setDragLine({
      x1: dragStart.x,
      y1: dragStart.y,
      x2: x,
      y2: y,
    })
  }

  // Handle mouse up to complete drag
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart || !dragEnd) {
      setIsDragging(false)
      setDragLine(null)
      return
    }

    // If we have both start and end points, create the relationship
    if (dragStart.id !== dragEnd.id) {
      onAddRelationship(dragStart.id, dragEnd.id, relationshipType)
    }

    // Reset drag state
    setIsDragging(false)
    setDragStart(null)
    setDragEnd(null)
    setDragLine(null)
    setHoverCell(null)
  }

  // Start dragging from a cell
  const startDrag = (e: React.MouseEvent, categoryId: string, cellElement: HTMLTableCellElement) => {
    if (!tableRef.current) return

    const rect = cellElement.getBoundingClientRect()
    const tableRect = tableRef.current.getBoundingClientRect()

    // Calculate center of the cell relative to the table
    const centerX = rect.left + rect.width / 2 - tableRect.left
    const centerY = rect.top + rect.height / 2 - tableRect.top

    setDragStart({
      id: categoryId,
      x: centerX,
      y: centerY,
    })
    setIsDragging(true)
    e.preventDefault()
  }

  // Handle entering a cell during drag
  const handleCellEnter = (rowId: string, colId: string, cellElement: HTMLTableCellElement) => {
    if (!isDragging || !tableRef.current) return

    const rect = cellElement.getBoundingClientRect()
    const tableRect = tableRef.current.getBoundingClientRect()

    // Calculate center of the cell relative to the table
    const centerX = rect.left + rect.width / 2 - tableRect.left
    const centerY = rect.top + rect.height / 2 - tableRect.top

    setDragEnd({
      id: colId,
      x: centerX,
      y: centerY,
    })

    setHoverCell({ rowId, colId })
  }

  // Handle leaving a cell during drag
  const handleCellLeave = () => {
    if (!isDragging) return
    setHoverCell(null)
  }

  // Cycle through relationship types
  const cycleRelationshipType = () => {
    const types: CategoryRelationship["type"][] = ["related", "parent", "prerequisite", "successor"]
    const currentIndex = types.indexOf(relationshipType)
    const nextIndex = (currentIndex + 1) % types.length
    setRelationshipType(types[nextIndex])
  }

  return (
    <div className="relative border rounded-md p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Relationship Matrix</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Drag mode:</span>
          <Button variant="outline" size="sm" onClick={cycleRelationshipType} className="flex items-center gap-1 h-8">
            <Badge variant="outline" className={getRelationshipColor(relationshipType)}>
              {getRelationshipLabel(relationshipType)}
            </Badge>
            <ArrowRight size={12} />
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto relative">
        <div className="relative" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
          <table ref={tableRef} className="min-w-full border rounded-md relative z-10">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border-b border-r font-medium text-left">Category</th>
                {categories.map((cat) => (
                  <th key={cat.id} className="p-2 border-b border-r font-medium text-center min-w-[100px]">
                    {cat.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((rowCat) => (
                <tr key={rowCat.id} className="border-b">
                  <td className="p-2 border-r font-medium bg-gray-50">{rowCat.name}</td>
                  {categories.map((colCat) => {
                    // Find relationship from rowCat to colCat
                    const relationship = rowCat.relationships.find((rel) => rel.targetId === colCat.id)
                    const isHovered = hoverCell?.rowId === rowCat.id && hoverCell?.colId === colCat.id
                    const isDragSource = dragStart?.id === rowCat.id
                    const isDragTarget = dragEnd?.id === colCat.id

                    return (
                      <td
                        key={colCat.id}
                        className={`p-2 border-r text-center relative ${
                          isHovered ? "bg-blue-50" : ""
                        } ${isDragSource ? "bg-blue-100" : ""} ${isDragTarget && isDragging ? "bg-green-100" : ""}`}
                        ref={(el) => {
                          if (el && isHovered) {
                            handleCellEnter(rowCat.id, colCat.id, el)
                          }
                        }}
                        onMouseEnter={(e) => {
                          if (isDragging) {
                            handleCellEnter(rowCat.id, colCat.id, e.currentTarget)
                          }
                        }}
                        onMouseLeave={handleCellLeave}
                        onMouseDown={(e) => {
                          if (rowCat.id !== colCat.id && !relationship) {
                            startDrag(e, rowCat.id, e.currentTarget)
                          }
                        }}
                      >
                        {rowCat.id === colCat.id ? (
                          <span className="text-gray-400">—</span>
                        ) : relationship ? (
                          <Badge variant="outline" className={getRelationshipColor(relationship.type)}>
                            {getRelationshipLabel(relationship.type)}
                          </Badge>
                        ) : (
                          <div className="flex justify-center items-center h-full">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
                              title="Drag to create relationship"
                            >
                              <Plus size={14} className="text-gray-400" />
                            </motion.div>
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* SVG overlay for drawing drag lines */}
          {isDragging && dragLine && (
            <svg
              ref={svgRef}
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
              style={{ overflow: "visible" }}
            >
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                </marker>
              </defs>
              <line
                x1={dragLine.x1}
                y1={dragLine.y1}
                x2={dragLine.x2}
                y2={dragLine.y2}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="4"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          )}
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          Tip: Drag from one cell to another to create a relationship. Click the button above to change relationship
          type.
        </p>
      </div>
    </div>
  )
}
