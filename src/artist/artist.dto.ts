export class ArtistReturn {
  uuid: string
  email: string
  name: string
  age: number
  createdAt: Date
  updatedAt: Date | null
}

export class ArtistUpsert {
  email: string
  password: string
}

export class ArtistCreate {
  email: string
  password: string
  name: string | null
}
