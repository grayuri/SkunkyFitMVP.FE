interface GetAllProps<T> {
  results: number
  total: number
  pages: number
  page: number
  datas: T[]
}

interface FetchOptions {
  headers?: any
  next?: { tags?: string[], revalidate?: number }
  cache?: "no-store" | "no-cache"
  body?: string
}

export async function getAll<T>(fetchUrl: string, options?: FetchOptions): Promise<GetAllProps<T>> {
  const response = await fetch(fetchUrl, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type":"application/json"
    }
  }) 
  const data = await response.json()
  return data
}

export async function getOne<T>(fetchUrl: string, options?: FetchOptions): Promise<T> {
  const response = await fetch(fetchUrl, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type":"application/json"
    }
  })
  const data = await response.json()
  return data
}

export async function createOne<T>(fetchUrl: string, options?: FetchOptions): Promise<T> {
  const response = await fetch(fetchUrl, {
    method: "POST",
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type":"application/json"
    }
  })
  const data = await response.json()
  return data
}

export async function updateOne<T>(fetchUrl: string, options?: FetchOptions): Promise<void> {
  const response = await fetch(fetchUrl, {
    method: "PATCH",
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type":"application/json"
    }
  })
  const data = await response.json()
  return data
}

export async function deleteOne<T>(fetchUrl: string, options?: FetchOptions): Promise<void> {
  const response = await fetch(fetchUrl, {
    method: "DELETE",
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type":"application/json"
    }
  })
  const data = await response.json()
  return data
}