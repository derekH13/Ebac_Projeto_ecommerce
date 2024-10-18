import { Restaurantes } from '../interface/interface'

export class Util {
  static async requisição(): Promise<Restaurantes[] | undefined> {
    const Response: any = await fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    )

    const result: Restaurantes[] = await Response.json()

    return result
  }

  static DescDiminuir(text: string): string {
    if (text.length > 95) {
      return text.slice(0, 167) + '...'
    }
    return text
  }
}
