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
        .del('/servico/604fad03db320cb1c4a4af71')
        expect(res.statusCode).toEqual(200)
    })
    it('atualizar', async () => {
        const res = await request(app)
        .put('/servico/604fad03db320cb1c4a4af71')
        .send({
            nome: 'teste',
            email: 'teste@teste.com',
            funcao: 'teste'
        })
        expect(res.statusCode).toEqual(200)
    })
})
