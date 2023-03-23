import { defineComponent } from 'vue';
import {
    card_box, section, card, title
} from './index.module.scss';

let UcontairData = [{
    title: '全球汇款',
    text: '全球都在使用 USDC 进行低成本和无国界支付。Circle 已与 Stellar 发展基金会合作在 Stellar 区块链上支持以 USDC 计价的汇款并促进全球数百万客户的跨境支付。拥有超过300万用户的拉丁美洲最大的加密货币交易所报告称，使用 USDC 的汇款交易量增加了 400%，高达 10 亿美元的汇款，或约占美国-墨西哥汇款总额的 5%',
}, {
    title: '对外援助/救灾',
    text: '全球的捐助者正在利用 USDC 为慈善事业和救灾筹集资金。例如，Circle 与由当选总统胡安·瓜伊多领导的委内瑞拉玻利瓦尔共和国、一个总部位于美国的金融科技公司以及美国政府合作，使用USDC向委内瑞拉医生提供救援资金，建立了一个分配渠道，利用USDC绕过了尼古拉斯·马杜罗威权政府的资本管制。Circle的另一个合作伙伴组织通过USDC有效地将数字资产转换为法定货币，以提高在现实世界中的救援工作，为印度Covid救援基金筹集了近4亿美元的总额。',
}, {
    title: '扩大金融服务覆盖面',
    text: 'USDC的全球覆盖使人们能够获得快速且实惠的金融服务，否则这些服务可能是不可触及的。目前，75%的USDC钱包余额低于100美元，并且Circle已经与Coinme合作，在Stellar链上实现了无需银行账户即可将法定货币转换为USDC的功能，这是吸引服务不足社区的关键步骤。Circle继续通过允许公司快速扩展并以几乎没有费用的方式进行小额交易来促进金融服务的覆盖面。得益于其透明度和稳定性，USDC 也已成为无银行账户用户利用借贷以及 DeFi 生态系统中的可能性的一种有吸引力的方式。',
}, {
    title: '跨境支付',
    text: '跨境支付：USDC已被证明是一种可靠的金融结算手段，并已在跨境支付方面发挥了高效作用。截至2022年7月1日，超过1416亿美元的USDC已从开源的公共区块链中兑换成美元。一家在线时尚市场已与Circle合作试点计划，降低运营成本并促进全球快速且廉价的USDC支付，计划最终使所有设计师的付款都能够在区块链上近乎实时地完成。',
},{
    title: '信贷供应',
    text: '信贷供应：USDC正在通过新兴经济体的机构扩大借贷，并通过寻求改善传统信贷市场中被遗漏的借款人的借贷来拓展贷款业务。利用数字身份解决方案和区块链数据透明性，Circle的合作伙伴为借款人提供更广泛的资本访问，无需提供大量的抵押品，革新了在无需储备银行制度的情况下，借款人和出借人之间的市场信贷中介。目前，USDC对肯尼亚、墨西哥、印度和菲律宾等发展中国家的贷款总额已超过1亿美元，已经覆盖了超过130万借款人和企业。',
},{
    title: '贸易金融',
    text: 'USDC在贸易金融中扮演着强大的角色，其中速度和透明度至关重要。通过USDC，参与交易的企业现在可以在供应链的每个环节获得前所未有的透明度和可追溯性。',
},{
    title: '众筹/筹款',
    text: 'USDC的易于访问性使得人们可以快速进行互联网原生的资本筹集来回应重要的事业。例如，Endaoment已经从捐助者那里筹集了超过1000万美元，并向数百个申请补助的已验证组织支付了超过700万美元。在开源区块链上使用USDC筹集资金和发送捐赠，为任何公司的审计追踪提供了前所未有的清晰度，并帮助员工用更少的资源做更多的事情。此外，USDC还通过以太坊区块链使乌克兰政府获得了超过60万美元的捐款。',
},];

export default defineComponent({
    name: 'USevenCard',
    render() {
        return <div class={`container ${card_box}`}>
            <div class="content flex-center">
                <h3 class={title}>The token that is disrupting the global financial industry</h3>
                <div class={`flex-between ${section}`}>
                    {UcontairData.map(item => {
                        return <div class={card}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>;
    },
});