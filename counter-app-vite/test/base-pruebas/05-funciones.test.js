import { getUser,getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruebas en 05-funciones',()=>{
	test('getUser debe de retornar un objeto',()=>{
		const testUser = {
			uid: 'ABC123',
			username: 'El_Papi1502'
		}
		const user = getUser()
		expect(testUser).toStrictEqual(user)
	})
	test('getUsuarioActivo debe de retornar un objeto',()=>{
		const name = 'Leandro'
		const testUser = {
			uid: 'ABC567',
			username: name
		}
		const user = getUsuarioActivo(name)
		expect(testUser).toStrictEqual(user)
	})
})