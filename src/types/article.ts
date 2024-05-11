export interface Article {
  id: string
  createdAt: string
  content: string
  title: string
  comments: Comment[]
  image: string
}