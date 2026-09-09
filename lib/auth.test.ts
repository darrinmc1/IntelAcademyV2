import { afterEach, describe, expect, it, vi } from "vitest"

describe("auth module load during production build", () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it("imports without JWT_SECRET when NODE_ENV is production", async () => {
    vi.stubEnv("NODE_ENV", "production")
    vi.stubEnv("JWT_SECRET", "")
    delete process.env.JWT_SECRET

    const auth = await import("@/lib/auth")
    expect(auth.createToken).toEqual(expect.any(Function))
    expect(auth.verifyToken).toEqual(expect.any(Function))
  })

  it("refuses to mint a session with the known default in production", async () => {
    vi.stubEnv("NODE_ENV", "production")
    vi.stubEnv("JWT_SECRET", "")
    delete process.env.JWT_SECRET

    const { createToken } = await import("@/lib/auth")
    await expect(
      createToken({
        id: "u1",
        email: "agent@example.com",
        codename: "TEST",
        role: "user",
        createdAt: new Date().toISOString(),
      })
    ).rejects.toThrow("JWT_SECRET environment variable is required in production")
  })
})
