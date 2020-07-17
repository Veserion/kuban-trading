import React from 'react'
import styled from "@emotion/styled";
import Button from './Button'

const buttons = [
    {active: false, href: '/nitrogen_fertilizers', text: 'Азотные удобрения'},
    {active: false, href: '/phosphoric_fertilizers', text: 'Фосфорные удобрения'},
    {active: false, href: '/potash_fertilizer', text: 'Калийные удобрения'},
    {active: false, href: '/complex_fertilizers', text: 'Комплексные удобрения'},
]

type TProps = {
    currentPath: string
}
const Navigation: React.FC<TProps> = (props) => {
    buttons.forEach(item => {
        item.href === props.currentPath
            ? item.active = true
            : item.active = false
    })
    return <Root>
        {buttons.map((item, i) => <Button key={i} text={item.text} href={item.href} active={item.active}/>)}
    </Root>
}
export default Navigation

const Root = styled.div`
margin-top: 3vw;
margin-bottom: 3vw;
display: flex;
justify-content: space-between;
width: 82vw;
max-width: 1170px;
@media(max-width: 650px){
  flex-direction: column;
  align-items: center;
  >div {
    margin: 10px 0;
  }
}
`

