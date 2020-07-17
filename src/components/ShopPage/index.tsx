/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import {RouteComponentProps} from "react-router";
import Navigation from "../ReusableComponents/Navigation";
import Table from './Table'
import bg from "../../assets/back.jpg";
import {css, jsx} from "@emotion/core";
import {Parallax} from "react-parallax";

interface IProps extends RouteComponentProps {
}

export default class ShopPage extends React.Component<IProps> {
    render() {
        const {history} = this.props
        const path = history.location.pathname
        const pageData: TDataPage = data[path]
        document.title = pageData.title
        return <Parallax bgImage={bg} strength={500} css={css`width: 100vw; display: flex; justify-content: center;`}>
            <Root>
                <Wrapper>
                    <Navigation currentPath={path}/>
                    <Title>
                        {pageData.title}
                    </Title>
                    <Subtitle>
                        {pageData.subtitle}
                    </Subtitle>
                    <Description>
                        {pageData.description}
                    </Description>
                    <Title>
                        {(pageData.title + 'доступные для заказа').toUpperCase()}
                    </Title>
                    <Subtitle>
                        {`В данной таблице представлены ${pageData.title} которые можно заказать в компании Кубань Трейдинг`}
                    </Subtitle>
                    <Table data={pageData.tableRows}/>
                </Wrapper>
            </Root>
        </Parallax>
    }
}
const Root = styled.div`
width: 100vw;
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
width: 82vw;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.div`
padding: 8px 10px;
font-size: 20px;
text-align: center;
background-color: rgba(255, 255, 255, 0.5);
`
const Subtitle = styled.div`
margin: 10px 0;
padding: 8px 10px;
font-size: 16px;
text-align: center;
background-color: rgba(255, 255, 255, 0.5);
`
const Description = styled.div`
font-size: 16px;
background-color: rgba(255, 255, 255, 0.5);
padding: 8px 10px;
`

export type TData = {
    [key: string]: TDataPage
}
export type TDataPage = {
    title: string,
    subtitle: string,
    description: string,
    tableRows: TDataTable[]
}
export type TDataTable = {
    label: string,
    description: string
}
const data: TData = {
    '/nitrogen_fertilizers': {
        title: 'Азотные удобрения',
        subtitle: 'Неорганические и органические азот содержащие вещества, которые вносят в почву для повышения урожайности. К минеральным азотным удобрениям относят амидные, аммиачные и нитратные.',
        description: 'Азотные удобрения — неорганические и органические азот содержащие вещества, которые вносят в почву для повышения урожайности. К минеральным азотным удобрениям относят амидные, аммиачные и нитратные. Азотные удобрения получают главным образом из синтетического аммиака. Из-за высокой мобильности соединений азота, его низкое содержание в почве часто лимитирует развитие культурных растений, поэтому внесение азотных удобрений вызывает большой положительный эффект. К минеральным азотным удобрениям относят амидные, аммиачные и нитратные. Азотные удобрения получают главным образом из синтетического аммиака. Из-за высокой мобильности соединений азота, его низкое содержание в почве часто лимитирует развитие культурных растений, поэтому внесение азотных удобрений вызывает большой положительный эффект.',
        tableRows: [{
            label: 'Аммиачная селитра (N = 34%)',
            description: 'Самое распространенное универсальное концентрированное азотное удобрение. Используется на всех типах почв под все культуры как основное удобрение для припосевного внесения и подкормок, быстрорастворима.'
        }, {
            label: 'Аммиачная селитра серосодержащая (N = 34%, S=6%)',
            description: 'Удобрение представляет собой смесь гранулированной селитры аммиачной с магнезиальной добавкой и кристаллического сульфата аммония. В сельском хозяйстве используется в качестве универсального азотного удобрения. Применяется на всех видах почв и под все сельскохозяйственные культуры в качестве основного, предпосевного удобрения и как подкормка.'
        }, {
            label: 'Карбамид (N = 46,2%)',
            description: 'Высокоэффективное азотное удобрение с максимальным количеством азота 46,2%. Используется в качестве основного удобрения под все сельскохозяйственные культуры и любые типы почв. Хорошо растворим в воде.'
        }, {
            label: 'Сульфат аммония (N=21%, S=24%)',
            description: 'Используется для азотно-серного питания всех типов сельскохозяйственных культур в качестве основного удобрения и при подкормах. При внесении сульфат аммония хорошо растворяется в воде, доступен и легко усваивается растениями. Выпускается в гранулированной и кристаллической форме.'
        }, {
            label: 'КАС 32 (N=32%)',
            description: 'Жидкое удобрение - представляет собой раствор карбамида с аммиачной селитрой. Удобрение с высокой экономической эффективностью. Можно перевозить в обычных железнодорожных цистернах и автоцистернах.'
        }
        ]
    },
    '/phosphoric_fertilizers': {
        title: 'Фосфорные удобрения',
        subtitle: 'Фосфорные удобрения — минеральные удобрения, соли кальция и аммония фосфорной кислоты. К ним относятся суперфосфат, двойной суперфосфат, аммофос, диаммофос, ортофосфат, метафосфат калия, преципитат, томасшлак, фосфоритная мука, костяная мука и др.',
        description: 'Фосфорные удобрения – необходимый источник питания для садовых и огородных культур. Некоторым из них нужно большее количество этого элемента, некоторым – меньшее, но без него растительная жизнь истощится и остановится. Если фосфоритов поступает достаточно, обменные реакции в теле растения идут быстрее, оно лучше развивается, растет и плодоносит. Самое интересное, что даже если удобрение внесено в почву с избытком, оно не наносит вред посадкам, так как усваивается только в необходимом количестве, и не молем больше.',
        tableRows: [{
            label: 'Аммофос (N=12%, P=52%)',
            description: 'Это безхлорное, безнитратное удобрение с наивысшей концентрацией фосфора. Своевременное внесение аммофоса обеспечивает защиту корневой системы растений, ускоряет процесс формирования и созревания плодов.'
        }, {
            label: 'Аммофос (N=12%, P=39%)',
            description: 'Минеральное удобрение не содержит хлора и применяется на всех типах почв для основного внесения и подкормки.'
        }, {
            label: 'Сульфоаммофос (N=14%, P=34%, S=8%)',
            description: 'Содержит азот в основном в аммонийной форме, благодаря чему слабо вымывается из почвы, способствует интенсивному поглощению фосфат-ионов корнями растений и быстрому усвоению питательных веществ. Содержит серу в сульфатной форме, легкодоступной растениям. Частично нейтрализует щелочность почвы и повышает усвояемость труднорастворимых фосфатов.'
        }
        ]
    },
    '/potash_fertilizer': {
        title: 'Калийные удобрения',
        subtitle: 'Неорганические и органические азот содержащие вещества, которые вносят в почву для повышения урожайности. К минеральным азотным удобрениям относят амидные, аммиачные и нитратные.',
        description: 'Калийные удобрения — помимо увеличения урожайности, улучшают качественные характеристики выращиваемой продукции: способствуют повышению сопротивляемости растений к заболеваниям, повышению лёжкости плодов при хранении и стойкости при транспортировке, а также улучшению их вкусовых и эстетических качеств. Калийные удобрения, как правило, применяются в комплексе с азотными и фосфорными удобрениями.',
        tableRows: [{
            label: 'Калий хлористый (Kcl =60%)',
            description: 'Калий хлористый является исключительно функциональным минеральным удобрением, участвующим в основных физиологических процессах роста сельскохозяйственных культур. Доступен в гранулированной и кристаллической форме.'
        }, {
            label: 'Удобрение типа Калимаг (Kcl =40%, Mg=1-5%)',
            description: 'Минеральное калийно-магниевое удобрение. Этот концентрированный продут, его применяют под овощные, кормовые культуры и картофель в основном внесении до посева и в подкормках.'
        }
        ]
    },
    '/complex_fertilizers': {
        title: 'Комплексные удобрения',
        subtitle: 'Неорганические и органические азот содержащие вещества, которые вносят в почву для повышения урожайности. К минеральным азотным удобрениям относят амидные, аммиачные и нитратные.',
        description: 'Комплексные удобрения — удобрения, содержащие несколько питательных элементов. Они подразделяются на cложные удобрения, содержащие два или три питательных элемента в составе одного химического соединения и получаемые в едином технологическом процессе. Соотношение между питательными элементами в этих удобрениях определяется их формулой. Например: Аммофос NH4H2PO4 и немного (NH4)2HPO4, калийная селитра KNO3, магний-аммоний-фосфат MgNH4PO4. Сложно-смешанные удобрения, получаемые путём химической или физической обработки одно- и двухкомпонентных удобрений, а потому единой химической формулы для представителей этой группы нет. Соотношение элементов питания в таких удобрениях определяется количеством исходных компонентов.',
        tableRows: [{
            label: 'Азофоска (N=16%, P=16%, K=16%)',
            description: 'Самое распространённое универсальное сложное минеральное удобрение, содержащее в легкоусваиваемой форме три основных питательных элемента, обеспечивающих сбалансированное питание растений: азот, фосфор, калий. Высокая суммарная концентрация действующих веществ азофоски (48%) даёт значительную прибавку урожая.'
        }, {
            label: 'Азотно-фосфорно-калийное удобрение (N=15%, P=15%, K=15%)',
            description: 'Сложное минеральное гранулированное удобрение. Концентрация питательных элементов составляет 45%, что делает его экономически выгодной в сравнении с простыми однокомпонентными удобрениями. Особенно эффективно на глиняных, песчаных и торфяно-болотных почвах.'
        }, {
            label: 'Диаммофоска (N=10%, P=26%, K=26%)',
            description: 'Высокоэффективное, концентрированное, гранулированное удобрение. В её состав входят все три основных элемента питания: азот, фосфор, калий, которые содержатся в водорастворимой форме и легко доступны растениям. Содержание всех элементов в одной грануле позволяет равномерно распределить элементы в почве, обеспечить сбалансированное питание растений.'
        }
        ]
    }
}
