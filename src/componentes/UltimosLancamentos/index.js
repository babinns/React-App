import {livros} from './dadosUltimosLancamentos'
import styled from 'styled-components'
import {Titulo} from '../Titulo'
import imgLivro from '../../imagens/livro2.png'
import CardRecomenda from '../CardRecomenda'


const UltimosLancamentosContainer = styled.section`


`

const NovosLivrosContainter = styled.div`

`


function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>

            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainter>
                {livros.map(livro => (
                    <img src={livro.image} alt='livro' />
                ))}

            </NovosLivrosContainter>
            <CardRecomenda
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                descricao='aplicação com Google'
                img={imgLivro}

            />
            
            
        </UltimosLancamentosContainer>
    )
}


export default UltimosLancamentos