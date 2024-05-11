export interface ApiKey {
  id: number
  name: string
  prefix: string | null
  apiKey: string | null
  revoked: boolean | null
  last_request_at: string | null
  request_count: number
  reset_time: number | null
  createdAt: string
  updatedAt: string | null
}
