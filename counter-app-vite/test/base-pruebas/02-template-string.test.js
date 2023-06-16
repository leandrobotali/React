import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en templateString',()=>{
	test('get saludo debe retornar Hola Leandro',()=>{
		const name = 'Leandro'
		const message = getSaludo(name)

		expect(message).toBe(`Hola ${ name }`)
	})
})