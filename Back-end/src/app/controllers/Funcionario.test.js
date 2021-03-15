import request from 'supertest'
import app from '../../server'

describe('Teste das rotas de funcionários', () => {
    it('cadastrados', async () => {
        const res = await request(app)
        .get('/funcionario/')
        expect(res.statusCode).toEqual(200)
    })
    it('criar funcuinario', async () => {
        const res = await request(app)
        .post('/funcionario/')
        .send({
            nome: 'teste',
            email: 'teste@teste.com',
            funcao: 'teste'
        })
        expect(res.statusCode).toEqual(201)
    })
    it('atualizar', async () => {
        const res = await request(app)
        .put('/funcionario/604fadbedb320cb1c4a4af76')
        .send({
            nome: 'testeNovo',
            funcao: 'testeNovo'
        })
        expect(res.statusCode).toEqual(200)
    })
    it('deletar', async () => {
        const res = await request(app)
        .del('/funcionario/604fadbedb320cb1c4a4af76')
        expect(res.statusCode).toEqual(200)
    })
})