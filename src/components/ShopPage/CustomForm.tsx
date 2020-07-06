/**@jsx jsx*/
import React, {useState} from "react";
import styled from "@emotion/styled";
import {jsx, css} from '@emotion/core';
import {Option} from 'rc-select'
import Select from './Select'

interface IProps {
    label: string
}

interface IState {
    name: string,
    tel: string,
    inn: string,
    fertilizers: IFert[],
    delivery: string,
    date: string,
    address: string,
    comment: string
}

interface IFert {
    fertilizer: string,
    packaging: string,
    weight: string
}

export default class CustomForm extends React.Component<IProps, IState> {
    state: IState = {
        name: '',
        tel: '',
        inn: '',
        fertilizers: [{
            fertilizer: this.props.label,
            packaging: '',
            weight: ''
        }],
        delivery: '',
        date: '',
        address: '',
        comment: ''
    }
    handleAddFertilizer = () => this.setState({
        fertilizers: [...this.state.fertilizers, {
            fertilizer: '',
            packaging: '',
            weight: ''
        }]
    })
    handleChangeName = (event: any) => this.setState({name: event.target.value});
    handleChangeTel = (event: any) => this.setState({tel: event.target.value});
    handleChangeInn = (event: any) => this.setState({inn: event.target.value});

    handleChangeFertilizer = (value: string, i: number) => {
        const {fertilizers} = this.state;
        fertilizers[i].fertilizer = value
        this.setState({fertilizers});
    }
    handleChangePackaging = (event: any, i: number) => {
        const {fertilizers} = this.state;
        fertilizers[i].packaging = event.target.value
        this.setState({fertilizers});
    }
    handleChangeWeight = (event: any, i: number) => {
        const {fertilizers} = this.state;
        fertilizers[i].weight = event.target.value
        this.setState({fertilizers});
    }
    handleChangeDelivery = (value: string) => this.setState({delivery: value});
    handleChangeDate = (event: any) => this.setState({date: event.target.value});
    handleChangeAddress = (event: any) => this.setState({address: event.target.value});
    handleChangeComment = (event: any) => this.setState({comment: event.target.value});
    handleSubmit = (event: any) => {
        alert(this.state);
        event.preventDefault();
    }

    render() {
        const {label} = this.props
        const {name, tel, inn, fertilizers, delivery, date, address, comment} = this.state
        return <Root onSubmit={this.handleSubmit}>
            <Row>
                <Column>
                    <Subtitle>
                        Ваше имя:
                    </Subtitle>
                    <Input type="text" value={name} onChange={this.handleChangeName} required={true}/>
                </Column>
                <Column>
                    <Subtitle>
                        Контактный телефон:
                    </Subtitle>
                    <Input type="tel" value={tel} onChange={this.handleChangeTel} required={true}/>
                </Column>
                <Column>
                    <Subtitle>
                        ИНН (Для юр. лиц):
                    </Subtitle>
                    <Input type="text" value={inn} onChange={this.handleChangeInn} required={true}/>
                </Column>
            </Row>


            {this.state.fertilizers.map((item, i) =>
                <Row key={i}>
                    <Column>
                        <Subtitle>
                            Наименование удобрения:
                        </Subtitle>
                        <Select
                            value={fertilizers[i].fertilizer}
                            onChange={(e) => this.handleChangeFertilizer(e, i)}
                            placeholder="Выберите удобрение"
                        >
                            <Option value='Аммиачная селитра (N = 34%)'>Аммиачная селитра (N = 34%)</Option>
                            <Option value='Аммиачная селитра серосодержащая (N = 34%, S=6%)'>Аммиачная селитра
                                серосодержащая (N
                                =
                                34%, S=6%)</Option>
                            <Option value='Карбамид (N = 46,2%)'>Карбамид (N = 46,2%)</Option>
                            <Option value='Сульфат аммония (N=21%, S=24%)'>Сульфат аммония (N=21%, S=24%)</Option>
                            <Option value='КАС 32 (N=32%)'>КАС 32 (N=32%)</Option>
                            <Option value='Аммофос (N=12%, P=52%)'>Аммофос (N=12%, P=52%)</Option>
                            <Option value='Аммофос (N=12%, P=39%)'>Аммофос (N=12%, P=39%)</Option>
                            <Option value='Сульфоаммофос (N=14%, P=34%, S=8%)'>Сульфоаммофос (N=14%, P=34%,
                                S=8%)</Option>
                        </Select>
                    </Column>
                    <Column>
                        <Subtitle>
                            Упаковки:
                        </Subtitle>
                        <Input type="text" value={fertilizers[i].packaging}
                               onChange={(e) => this.handleChangePackaging(e, i)}
                               required={true}/>
                    </Column>
                    <Column>
                        <Subtitle>
                            Объём (в тоннах):
                        </Subtitle>
                        <Input type="text" value={fertilizers[i].weight}
                               onChange={(e) => this.handleChangeWeight(e, i)}
                               required={true}/>
                    </Column>
                </Row>)}


            <Row>
                <Column>
                    <Button onClick={this.handleAddFertilizer}>
                        ДОБАВИТЬ УДОБРЕНИЯ
                    </Button>
                </Column>
                <Column></Column>
                <Column></Column>
            </Row>


            <Row>
                <Column>
                    <Subtitle>
                        Способ доставки:
                    </Subtitle>
                    <Select
                        value={delivery}
                        onChange={this.handleChangeDelivery}
                        placeholder="Способ доставки"
                    >
                        <Option value='ж/д транспортом'>ж/д транспортом</Option>
                        <Option value='автотранспортом'>автотранспортом</Option>
                        <Option value='со склада'>со склада</Option>
                    </Select>
                </Column>
                <Column>
                    <Subtitle>
                        Срок доставки:
                    </Subtitle>
                    <Input type="text" value={date} onChange={this.handleChangeDate} required={true}/>
                </Column>
                <Column>
                    <Subtitle>
                        Адрес или ж/д станция:
                    </Subtitle>
                    <Input type="text" value={address} onChange={this.handleChangeAddress} required={true}/>
                </Column>
            </Row>

            <Row css={css`flex-direction: column;`}>
                <Subtitle>
                    Комментарий к заказу:
                </Subtitle>
                <Comment value={comment} onChange={this.handleChangeComment}/>
            </Row>


            <Row>
                <Column></Column>
                <Column></Column>
                <Column>
                    <Input type="submit" value={'ОТПРАВИТЬ ЗАЯВКУ'}/>
                </Column>
            </Row>
        </Root>
    };
}

const Root = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
.rc-select{
width: 100%;
font-weight: normal;
font-size: 14px;
line-height: 138.2%;
}
.rc-select-selection{
border-color: #FAFAFA;
background: #FAFAFA;
}
.rc-select-selection__rendered{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.rc-select-selection-search{
  width: 100%;
}
`
const Row = styled.div`
width: 100%;
display: flex;
>div{
  margin: 10px;
}
`
const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 1;
`
const Subtitle = styled.div`
font-size: 14px;
`

const Input = styled.input`
width: 100%;
height: 35px;
//padding: 5px 7px;
font-size: 14px;
border: 1px solid darkgray;
box-sizing: border-box;
`
const Button = styled.div`
width: 100%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 16px;
font-weight: bold;
background: #00a0e3;
`
const Comment = styled.textarea`
width: calc(100% - 20px);
margin: -5px 10px;
height: 100px;
`