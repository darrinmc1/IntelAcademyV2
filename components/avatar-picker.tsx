'use client'

import { useRef, useState } from 'react'
import { User, Camera, Loader2, Trash2, Upload } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useUser } from '@/components/user-provider'

const OUTPUT_SIZE = 256
const MAX_SOURCE_BYTES = 5 * 1024 * 1024 // 5MB

// Resize + center-crop the chosen file to a square JPEG data URL, entirely
// client-side (no upload service needed). Keeps stored size small.
async function fileToSquareDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file)
  try {
    const canvas = document.createElement('canvas')
    canvas.width = OUTPUT_SIZE
    canvas.height = OUTPUT_SIZE
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas not supported')
    const side = Math.min(bitmap.width, bitmap.height)
    const sx = (bitmap.width - side) / 2
    const sy = (bitmap.height - side) / 2
    ctx.drawImage(bitmap, sx, sy, side, side, 0, 0, OUTPUT_SIZE, OUTPUT_SIZE)
    return canvas.toDataURL('image/jpeg', 0.85)
  } finally {
    bitmap.close?.()
  }
}

export function AvatarPicker({ triggerClassName }: { triggerClassName?: string }) {
  const { profile, setAvatar, removeAvatar } = useUser()
  const { toast } = useToast()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)

  const avatar = profile?.avatar

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = '' // allow re-selecting the same file later
    if (!file) return
    if (!file.type.startsWith('image/')) {
      toast({ title: 'Not an image', description: 'Please choose an image file.', variant: 'destructive' })
      return
    }
    if (file.size > MAX_SOURCE_BYTES) {
      toast({ title: 'Image too large', description: 'Please choose an image under 5MB.', variant: 'destructive' })
      return
    }
    setBusy(true)
    try {
      const dataUrl = await fileToSquareDataUrl(file)
      setAvatar(dataUrl)
      toast({ title: 'Profile picture updated' })
      setOpen(false)
    } catch {
      toast({ title: 'Could not process image', description: 'Try a different file.', variant: 'destructive' })
    } finally {
      setBusy(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          title="Change profile picture"
          className={
            triggerClassName ??
            'group relative flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center overflow-hidden'
          }
        >
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <User className="w-4 h-4 text-cyan-400" />
          )}
          <span className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40">
            <Camera className="w-3 h-3 text-white" />
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Profile picture</DialogTitle>
          <DialogDescription>
            Upload an image. It is resized to {OUTPUT_SIZE}x{OUTPUT_SIZE} and saved to this device.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-2">
          <div className="w-28 h-28 rounded-full overflow-hidden border bg-muted flex items-center justify-center">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatar} alt="Current profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-10 h-10 text-muted-foreground" />
            )}
          </div>

          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onPick} />

          <div className="flex gap-2">
            <Button onClick={() => inputRef.current?.click()} disabled={busy}>
              {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
              {avatar ? 'Change' : 'Upload'}
            </Button>
            {avatar && (
              <Button
                variant="outline"
                disabled={busy}
                onClick={() => {
                  removeAvatar()
                  toast({ title: 'Profile picture removed' })
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Remove
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
