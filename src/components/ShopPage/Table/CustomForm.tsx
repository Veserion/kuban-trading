/**@jsx jsx*/
import React, {useState} from "react";
import styled from "@emotion/styled";
import {jsx, css} from '@emotion/core';
import {Option} from 'rc-select'
import Select from './Select'
import emailjs from 'emailjs-com';

interface IProps {
    label: string,
    handleCloseDialog: () => void
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

    handleSubmit = (e: any) => {
        const templateParams = {
            message: `Имя: ${this.state.name}
        Контактный телефон: ${this.state.tel}
        ИНН: ${this.state.inn}
        Список удобрений: 
        ${this.state.fertilizers.map((item, i) =>
                `
            Удобрение: ${this.state.fertilizers[i].fertilizer}
            Упаковка: ${this.state.fertilizers[i].packaging}
            Объем: ${this.state.fertilizers[i].weight}
            `)}
        Способ доставки: ${this.state.delivery}
        Срок доставки: ${this.state.date}
        Адрес доставки или жд станция: ${this.state.address}
        Комментарий к заказу: ${this.state.comment}`,
        }
        e.preventDefault();
        console.log(this.state)
        emailjs.send('default_service', 'submitting_the_completed_form', templateParams, 'user_0onN8wEZpFQhKo8Z9dQhA')
            .then((result) => {
                alert('Ваша заявка обрабатывается.')
            }, (error) => {
                alert('Возникла ошибка. Повторите попытку.')
            });
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
                    <Input type="text" value={inn} onChange={this.handleChangeInn}/>
                </Column>
            </Row>


            {this.state.fertilizers.map((item, i) =>
                <Row key={i}>
                    <CloseBtn onClick={this.props.handleCloseDialog}>
                        ×
                    </CloseBtn>
                    <Column>
                        <Subtitle>
                            Наименование удобрения:
                        </Subtitle>
                        <Select
                            value={fertilizers[i].fertilizer}
                            onChange={(e) => this.handleChangeFertilizer(e, i)}
                            placeholder="Выберите удобрение"

                        >
                            <Option value='Аммиачная селитра (N = 34%)' data-owner='dialog'>Аммиачная селитра (N =
                                34%)</Option>

                            <Option value='Аммиачная селитра серосодержащая (N = 34%, S=6%)' data-owner='dialog'>Аммиачная
                                селитра
                                серосодержащая (N
                                =
                                34%, S=6%)</Option>

                            <Option value='Карбамид (N = 46,2%)' data-owner='dialog'>Карбамид (N = 46,2%)</Option>

                            <Option value='Сульфат аммония (N=21%, S=24%)' data-owner='dialog'>Сульфат аммония (N=21%,
                                S=24%)</Option>

                            <Option value='КАС 32 (N=32%)' data-owner='dialog'>КАС 32 (N=32%)</Option>

                            <Option value='Аммофос (N=12%, P=52%)' data-owner='dialog'>Аммофос (N=12%, P=52%)</Option>

                            <Option value='Аммофос (N=12%, P=39%)' data-owner='dialog'>Аммофос (N=12%, P=39%)</Option>

                            <Option value='Сульфоаммофос (N=14%, P=34%, S=8%)' data-owner='dialog'>Сульфоаммофос (N=14%,
                                P=34%,
                                S=8%)</Option>
                            <Option value='Калий хлористый (Kcl =60%)' data-owner='dialog'>Калий хлористый (Kcl
                                =60%)</Option>
                            <Option value='Удобрение типа Калимаг (Kcl =40%, Mg=1-5%)' data-owner='dialog'>Удобрение
                                типа Калимаг (Kcl =40%, Mg=1-5%)</Option>
                            <Option value='Азофоска (N=16%, P=16%, K=16%)' data-owner='dialog'>Азофоска (N=16%,
                                P=16%, K=16%)</Option>
                            <Option value='Азотно-фосфорно-калийное удобрение (N=15%, P=15%, K=15%)'
                                    data-owner='dialog'>Азотно-фосфорно-калийное удобрение (N=15%, P=15%,
                                K=15%)</Option>
                            <Option value='Диаммофоска (N=10%, P=26%, K=26%)' data-owner='dialog'>Диаммофоска
                                (N=10%, P=26%, K=26%)</Option>
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
                        <Option value='ж/д транспортом' data-owner='dialog'>ж/д транспортом</Option>
                        <Option value='автотранспортом' data-owner='dialog'>автотранспортом</Option>
                        <Option value='со склада' data-owner='dialog'>со склада</Option>
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
                <Column>
                    <Input type="submit" value={'ОТПРАВИТЬ ЗАЯВКУ'}
                           css={css`margin: 10px 0px; background: #00a0e3; 
                           border: none; color: white; font-weight: bold; cursor: pointer;`}/>
                </Column>
                <Column>
                    <Button onClick={this.props.handleCloseDialog}>
                        ЗАКРЫТЬ
                    </Button>
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
li.rc-select-dropdown-menu-item{
  font-family: 'Roboto';
}
`
const Row = styled.div`
width: 100%;
display: flex;
>div{
  margin: 10px;
}
@media(max-width: 990px){
 flex-direction: column;
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
font-size: 14px;
border: 1px solid darkgray;
box-sizing: border-box;
`
const Button = styled.div`
width: calc(100% - 10px);
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 13px;
text-align: center;
font-weight: bold;
background: #00a0e3;
cursor: pointer;
`
const Comment = styled.textarea`
width: calc(100% - 20px);
margin: -5px 10px;
height: 100px;
`
const CloseBtn = styled.div`
display: none;
@media(max-width: 798px){
  display: flex;
  padding-bottom: 3px;
  align-items: center;
  justify-content: center;
  background: #00a0e3;
  color: white;
  position: absolute;
  right: 1.5vw;
  top: 1.5vw;
  font-size: 25px;
  line-height: 25px;
  width: 30px;
  height: 27px;
  cursor: pointer;
}
`