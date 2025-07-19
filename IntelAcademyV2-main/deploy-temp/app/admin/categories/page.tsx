"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Edit, Plus, Save, Trash2, X, ChevronDown, Link2, Link2Off } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import MatrixDragDrop from "./matrix-drag-drop"

// Types for our categories
interface CategoryRelationship {
  type: "parent" | "related" | "prerequisite" | "successor"
  targetId: string
}

interface Category {
  id: string
  name: string
  description: string
  slug: string
  color: string
  icon?: string
  topics?: number
  paths?: number
  parentId?: string
  relationships: CategoryRelationship[]
}

// Mock data for demonstration
const mockCategories: Category[] = [
  {
    id: "1",
    name: "Core Intelligence",
    description: "Fundamental concepts and disciplines of intelligence analysis",
    slug: "core-intelligence",
    color: "blue",
    topics: 12,
    paths: 4,
    relationships: [],
  },
  {
    id: "2",
    name: "Intelligence Methods",
    description: "Collection methods and intelligence gathering techniques",
    slug: "intelligence-methods",
    color: "orange",
    topics: 18,
    paths: 5,
    parentId: "1",
    relationships: [
      { type: "parent", targetId: "1" },
      { type: "related", targetId: "3" },
    ],
  },
  {
    id: "3",
    name: "Analysis & Skills",
    description: "Analytical techniques and professional skills for intelligence analysts",
    slug: "analysis-skills",
    color: "purple",
    topics: 15,
    paths: 6,
    parentId: "1",
    relationships: [
      { type: "parent", targetId: "1" },
      { type: "related", targetId: "2" },
    ],
  },
  {
    id: "4",
    name: "Tools & Technology",
    description: "Software, platforms, and technologies for intelligence work",
    slug: "tools-technology",
    color: "green",
    topics: 8,
    paths: 3,
    relationships: [
      { type: "prerequisite", targetId: "2" },
      { type: "prerequisite", targetId: "3" },
    ],
  },
]

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)
  const [newCategory, setNewCategory] = useState<Partial<Category>>({
    name: "",
    description: "",
    slug: "",
    color: "blue",
    relationships: [],
  })
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [relationshipDialogOpen, setRelationshipDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [newRelationship, setNewRelationship] = useState<{
    type: CategoryRelationship["type"]
    targetId: string
  }>({
    type: "related",
    targetId: "",
  })

  // Load categories on mount
  useEffect(() => {
    // In a real app, this would be an API call
    setCategories(mockCategories)
  }, [])

  // Handle editing a category
  const handleEdit = (category: Category) => {
    setEditingCategory(category)
  }

  // Handle saving edited category
  const handleSave = (id: string) => {
    setCategories(categories.map((cat) => (cat.id === id ? { ...cat, ...editingCategory } : cat)))
    setEditingCategory(null)
    showSuccess("Category updated successfully")
  }

  // Handle deleting a category
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this category? This action cannot be undone.")) {
      setCategories(categories.filter((cat) => cat.id !== id))
      showSuccess("Category deleted successfully")
    }
  }

  // Handle creating a new category
  const handleCreate = () => {
    if (!newCategory.name || !newCategory.slug) {
      showError("Name and slug are required")
      return
    }

    const newId = (Math.max(...categories.map((c) => Number.parseInt(c.id))) + 1).toString()
    const createdCategory: Category = {
      id: newId,
      name: newCategory.name || "",
      description: newCategory.description || "",
      slug: newCategory.slug || "",
      color: newCategory.color || "blue",
      topics: 0,
      paths: 0,
      relationships: newCategory.relationships || [],
    }

    setCategories([...categories, createdCategory])
    setNewCategory({ name: "", description: "", slug: "", color: "blue", relationships: [] })
    showSuccess("Category created successfully")
  }

  // Show success message
  const showSuccess = (message: string) => {
    setSuccessMessage(message)
    setErrorMessage("")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  // Show error message
  const showError = (message: string) => {
    setErrorMessage(message)
    setSuccessMessage("")
    setTimeout(() => setErrorMessage(""), 3000)
  }

  // Generate slug from name
  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  }

  // Open relationship management dialog
  const openRelationshipDialog = (category: Category) => {
    setSelectedCategory(category)
    setRelationshipDialogOpen(true)
  }

  // Add a new relationship
  const addRelationship = () => {
    if (!selectedCategory || !newRelationship.targetId || newRelationship.targetId === selectedCategory.id) {
      showError("Please select a valid category for the relationship")
      return
    }

    // Check if relationship already exists
    const relationshipExists = selectedCategory.relationships.some(
      (rel) => rel.targetId === newRelationship.targetId && rel.type === newRelationship.type,
    )

    if (relationshipExists) {
      showError("This relationship already exists")
      return
    }

    // Add relationship to selected category
    const updatedCategory = {
      ...selectedCategory,
      relationships: [
        ...selectedCategory.relationships,
        { type: newRelationship.type, targetId: newRelationship.targetId },
      ],
    }

    // Update categories array
    setCategories(categories.map((cat) => (cat.id === selectedCategory.id ? updatedCategory : cat)))

    // If it's a parent relationship, also update the parentId
    if (newRelationship.type === "parent") {
      const updatedCategories = categories.map((cat) =>
        cat.id === selectedCategory.id ? { ...cat, parentId: newRelationship.targetId } : cat,
      )
      setCategories(updatedCategories)
    }

    // If it's a bidirectional relationship like "related", add the inverse relationship
    if (newRelationship.type === "related") {
      const targetCategory = categories.find((cat) => cat.id === newRelationship.targetId)
      if (targetCategory) {
        // Check if inverse relationship already exists
        const inverseExists = targetCategory.relationships.some(
          (rel) => rel.targetId === selectedCategory.id && rel.type === "related",
        )

        if (!inverseExists) {
          const updatedTargetCategory = {
            ...targetCategory,
            relationships: [...targetCategory.relationships, { type: "related", targetId: selectedCategory.id }],
          }
          setCategories(categories.map((cat) => (cat.id === targetCategory.id ? updatedTargetCategory : cat)))
        }
      }
    }

    // Reset form and show success message
    setNewRelationship({ type: "related", targetId: "" })
    showSuccess("Relationship added successfully")
  }

  // Add relationship from drag and drop
  const handleDragDropRelationship = (sourceId: string, targetId: string, type: CategoryRelationship["type"]) => {
    const sourceCategory = categories.find((cat) => cat.id === sourceId)
    if (!sourceCategory || sourceId === targetId) return

    // Check if relationship already exists
    const relationshipExists = sourceCategory.relationships.some(
      (rel) => rel.targetId === targetId && rel.type === type,
    )

    if (relationshipExists) {
      showError("This relationship already exists")
      return
    }

    // Add relationship to source category
    const updatedCategory = {
      ...sourceCategory,
      relationships: [...sourceCategory.relationships, { type, targetId }],
    }

    // Update categories array
    let updatedCategories = categories.map((cat) => (cat.id === sourceId ? updatedCategory : cat))

    // If it's a parent relationship, also update the parentId
    if (type === "parent") {
      updatedCategories = updatedCategories.map((cat) => (cat.id === sourceId ? { ...cat, parentId: targetId } : cat))
    }

    // If it's a bidirectional relationship like "related", add the inverse relationship
    if (type === "related") {
      const targetCategory = categories.find((cat) => cat.id === targetId)
      if (targetCategory) {
        // Check if inverse relationship already exists
        const inverseExists = targetCategory.relationships.some(
          (rel) => rel.targetId === sourceId && rel.type === "related",
        )

        if (!inverseExists) {
          const updatedTargetCategory = {
            ...targetCategory,
            relationships: [...targetCategory.relationships, { type: "related", targetId: sourceId }],
          }
          updatedCategories = updatedCategories.map((cat) => (cat.id === targetId ? updatedTargetCategory : cat))
        }
      }
    }

    setCategories(updatedCategories)
    showSuccess("Relationship added successfully")
  }

  // Remove a relationship
  const removeRelationship = (categoryId: string, relationshipType: string, targetId: string) => {
    const category = categories.find((cat) => cat.id === categoryId)
    if (!category) return

    // Remove the relationship
    const updatedRelationships = category.relationships.filter(
      (rel) => !(rel.type === relationshipType && rel.targetId === targetId),
    )

    // Update the category
    const updatedCategory = {
      ...category,
      relationships: updatedRelationships,
    }

    // If it was a parent relationship, also clear the parentId
    if (relationshipType === "parent") {
      updatedCategory.parentId = undefined
    }

    // Update categories array
    setCategories(categories.map((cat) => (cat.id === categoryId ? updatedCategory : cat)))

    // If it's a bidirectional relationship like "related", also remove the inverse relationship
    if (relationshipType === "related") {
      const targetCategory = categories.find((cat) => cat.id === targetId)
      if (targetCategory) {
        const updatedTargetRelationships = targetCategory.relationships.filter(
          (rel) => !(rel.type === "related" && rel.targetId === categoryId),
        )

        const updatedTargetCategory = {
          ...targetCategory,
          relationships: updatedTargetRelationships,
        }

        setCategories(categories.map((cat) => (cat.id === targetId ? updatedTargetCategory : cat)))
      }
    }

    showSuccess("Relationship removed successfully")
  }

  // Get category name by ID
  const getCategoryName = (id: string) => {
    const category = categories.find((cat) => cat.id === id)
    return category ? category.name : "Unknown Category"
  }

  // Get relationship label
  const getRelationshipLabel = (type: string) => {
    switch (type) {
      case "parent":
        return "Parent of"
      case "related":
        return "Related to"
      case "prerequisite":
        return "Prerequisite for"
      case "successor":
        return "Successor to"
      default:
        return type
    }
  }

  // Get badge color for relationship type
  const getRelationshipColor = (type: string) => {
    switch (type) {
      case "parent":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "related":
        return "bg-green-50 text-green-700 border-green-200"
      case "prerequisite":
        return "bg-orange-50 text-orange-700 border-orange-200"
      case "successor":
        return "bg-purple-50 text-purple-700 border-purple-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Category Management</h1>
          <p className="text-muted-foreground">Manage intelligence categories for the academy</p>
        </div>
        <Button variant="default" className="gap-2">
          <Plus size={16} />
          Export Categories
        </Button>
      </div>

      {successMessage && (
        <Alert className="mb-4 bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">{successMessage}</AlertDescription>
        </Alert>
      )}

      {errorMessage && (
        <Alert className="mb-4 bg-red-50 border-red-200">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800">Error</AlertTitle>
          <AlertDescription className="text-red-700">{errorMessage}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="existing">
        <TabsList className="mb-4">
          <TabsTrigger value="existing">Existing Categories</TabsTrigger>
          <TabsTrigger value="new">Create New Category</TabsTrigger>
          <TabsTrigger value="relationships">Relationship Map</TabsTrigger>
        </TabsList>

        <TabsContent value="existing">
          <div className="grid gap-4">
            {categories.map((category) => (
              <Card key={category.id} className={editingCategory?.id === category.id ? "border-blue-400" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    {editingCategory?.id === category.id ? (
                      <Input
                        value={editingCategory.name}
                        onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                        className="font-semibold text-lg"
                      />
                    ) : (
                      <CardTitle className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full bg-${category.color}-500`}></div>
                        {category.name}
                      </CardTitle>
                    )}
                    <div className="flex gap-2">
                      {editingCategory?.id === category.id ? (
                        <>
                          <Button size="sm" variant="ghost" onClick={() => setEditingCategory(null)}>
                            <X size={16} />
                          </Button>
                          <Button size="sm" variant="default" onClick={() => handleSave(category.id)}>
                            <Save size={16} />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button size="sm" variant="ghost" onClick={() => handleEdit(category)}>
                            <Edit size={16} />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-500"
                            onClick={() => handleDelete(category.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  {editingCategory?.id === category.id ? (
                    <Input
                      value={editingCategory.description}
                      onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                      className="mt-2"
                    />
                  ) : (
                    <CardDescription>{category.description}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Slug</p>
                      {editingCategory?.id === category.id ? (
                        <Input
                          value={editingCategory.slug}
                          onChange={(e) => setEditingCategory({ ...editingCategory, slug: e.target.value })}
                          className="text-sm"
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground font-mono">{category.slug}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Color</p>
                      {editingCategory?.id === category.id ? (
                        <select
                          value={editingCategory.color}
                          onChange={(e) => setEditingCategory({ ...editingCategory, color: e.target.value })}
                          className="w-full rounded-md border border-input px-3 py-1 text-sm"
                        >
                          <option value="blue">Blue</option>
                          <option value="green">Green</option>
                          <option value="red">Red</option>
                          <option value="purple">Purple</option>
                          <option value="orange">Orange</option>
                          <option value="cyan">Cyan</option>
                          <option value="pink">Pink</option>
                        </select>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full bg-${category.color}-500`}></div>
                          <span className="text-sm text-muted-foreground capitalize">{category.color}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Relationships Section */}
                  <Collapsible className="mt-4 border rounded-md">
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-2 hover:bg-gray-50 rounded-t-md">
                      <div className="flex items-center gap-2">
                        <Link2 size={16} className="text-gray-500" />
                        <span className="text-sm font-medium">Relationships</span>
                        <Badge variant="outline" className="ml-2">
                          {category.relationships.length}
                        </Badge>
                      </div>
                      <ChevronDown size={16} className="text-gray-500" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-2 border-t bg-gray-50">
                      {category.relationships.length > 0 ? (
                        <div className="space-y-2">
                          {category.relationships.map((rel, index) => (
                            <div key={index} className="flex items-center justify-between bg-white p-2 rounded border">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className={getRelationshipColor(rel.type)}>
                                  {getRelationshipLabel(rel.type)}
                                </Badge>
                                <span className="text-sm font-medium">{getCategoryName(rel.targetId)}</span>
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-7 w-7 p-0 text-red-500"
                                onClick={() => removeRelationship(category.id, rel.type, rel.targetId)}
                              >
                                <Link2Off size={14} />
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground py-1">No relationships defined</p>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2 w-full"
                        onClick={() => openRelationshipDialog(category)}
                      >
                        <Plus size={14} className="mr-1" /> Add Relationship
                      </Button>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex gap-3">
                    <Badge variant="outline" className="bg-blue-50">
                      {category.topics} Topics
                    </Badge>
                    <Badge variant="outline" className="bg-green-50">
                      {category.paths} Learning Paths
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">ID: {category.id}</div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardHeader>
              <CardTitle>Create New Category</CardTitle>
              <CardDescription>Add a new category to organize intelligence topics and learning paths</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    placeholder="e.g., Tactical Intelligence"
                    value={newCategory.name}
                    onChange={(e) => {
                      const name = e.target.value
                      setNewCategory({
                        ...newCategory,
                        name,
                        slug: generateSlug(name),
                      })
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Input
                    placeholder="Brief description of this category"
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Slug</label>
                    <Input
                      placeholder="e.g., tactical-intelligence"
                      value={newCategory.slug}
                      onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">Used in URLs and for technical identification</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Color</label>
                    <select
                      value={newCategory.color}
                      onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                      className="w-full rounded-md border border-input px-3 py-2"
                    >
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="red">Red</option>
                      <option value="purple">Purple</option>
                      <option value="orange">Orange</option>
                      <option value="cyan">Cyan</option>
                      <option value="pink">Pink</option>
                    </select>
                    <p className="text-xs text-muted-foreground">Used for visual identification</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Parent Category (Optional)</label>
                  <Select
                    onValueChange={(value) => {
                      if (value) {
                        setNewCategory({
                          ...newCategory,
                          parentId: value,
                          relationships: [
                            ...(newCategory.relationships || []).filter((r) => r.type !== "parent"),
                            { type: "parent", targetId: value },
                          ],
                        })
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a parent category (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Establishes a hierarchical relationship</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <Button
                variant="outline"
                onClick={() =>
                  setNewCategory({ name: "", description: "", slug: "", color: "blue", relationships: [] })
                }
              >
                Reset
              </Button>
              <Button onClick={handleCreate}>Create Category</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="relationships">
          <Card>
            <CardHeader>
              <CardTitle>Category Relationship Map</CardTitle>
              <CardDescription>Visualize and manage relationships between categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4 bg-gray-50 mb-6">
                <h3 className="text-lg font-medium mb-4">Hierarchy View</h3>
                <div className="space-y-4">
                  {categories
                    .filter((cat) => !cat.parentId)
                    .map((rootCategory) => (
                      <div key={rootCategory.id} className="border rounded-md bg-white p-3">
                        <div className="flex items-center gap-2 font-medium">
                          <div className={`w-3 h-3 rounded-full bg-${rootCategory.color}-500`}></div>
                          {rootCategory.name}
                        </div>

                        {/* Child categories */}
                        <div className="ml-6 mt-2 space-y-2">
                          {categories
                            .filter((cat) => cat.parentId === rootCategory.id)
                            .map((childCategory) => (
                              <div key={childCategory.id} className="border-l-2 pl-3 py-1">
                                <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full bg-${childCategory.color}-500`}></div>
                                  <span>{childCategory.name}</span>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Matrix Drag and Drop Component */}
              <MatrixDragDrop
                categories={categories}
                onAddRelationship={handleDragDropRelationship}
                getRelationshipLabel={getRelationshipLabel}
                getRelationshipColor={getRelationshipColor}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Relationship Management Dialog */}
      <Dialog open={relationshipDialogOpen} onOpenChange={setRelationshipDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Category Relationships</DialogTitle>
            <DialogDescription>
              {selectedCategory
                ? `Define how "${selectedCategory.name}" relates to other categories`
                : "Define category relationships"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Relationship Type</label>
              <Select
                value={newRelationship.type}
                onValueChange={(value) =>
                  setNewRelationship({
                    ...newRelationship,
                    type: value as CategoryRelationship["type"],
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select relationship type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parent">Parent (Hierarchical)</SelectItem>
                  <SelectItem value="related">Related (Bidirectional)</SelectItem>
                  <SelectItem value="prerequisite">Prerequisite For</SelectItem>
                  <SelectItem value="successor">Successor To</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                {newRelationship.type === "parent" && "This category is a child of the selected category"}
                {newRelationship.type === "related" && "These categories are related to each other (bidirectional)"}
                {newRelationship.type === "prerequisite" && "This category is a prerequisite for the selected category"}
                {newRelationship.type === "successor" && "This category builds upon the selected category"}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Target Category</label>
              <Select
                value={newRelationship.targetId}
                onValueChange={(value) =>
                  setNewRelationship({
                    ...newRelationship,
                    targetId: value,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories
                    .filter((cat) => cat.id !== selectedCategory?.id)
                    .map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setRelationshipDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={addRelationship}>Add Relationship</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
