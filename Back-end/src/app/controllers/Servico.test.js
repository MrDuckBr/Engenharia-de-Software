import request from 'supertest'
import app from '../../server'

describe('Teste das rotas de servicos', () => {
    it('cadastrados', async () => {
        const res = await request(app)
        .get('/servico/cadastrados')
        expect(res.statusCode).toEqual(200)
    })
    it('disponiveis', async () => {
        const res = await request(app)
        .get('/servico/disponiveis')
        expect(res.statusCode).toEqual(200)
    })
    it('deletar', async () => {
        const res = await request(app)
        .del('/servico/604bcbe2478f0a8e5d0104ba')
        expect(res.statusCode).toEqual(200)
    })
    it('atualizar', async () => {
        const res = await request(app)
        .put('/servico/604bcbe2478f0a8e5d0104ba')
        .send({
            nome: 'teste',
            email: 'teste@teste.com',
            funcao: 'teste'
        })
        expect(res.statusCode).toEqual(200)
    })
})
