import { defineComponent } from 'vue';
import {
    lr_box, list, list_item, title, left, right, text
} from './LeftRight.module.scss';

let contentData = [{
    title: '什么是USDC？',
    src: '../../../../../img/index/bank.webp',
    text: 'USDC是一种完全储备的美元稳定币。USDC由受益监管。有执照的金融机构（Circle和Coinbase）共同开发、管理和发行。Circle以1 USDC：1 USD的比例保留全额的储备金，并以现金和短期美国国债的形式交由领先的金融机构保管。USDC受到美国政府金融犯罪网络的监管，需要定期接受世界顶级会计师事务所的审计，并发布报告'
}, {
    title: '稳定',
    src: '../../../../../img/index/Developers.webp',
    text: 'USDC的货币发行力量与美元的储备量一一对应，完全由现金和短期美国政府债务支持，因此其价值相对于稳定，适用于作为数字资产间的价值转移媒介。'
}, {
    title: '高效',
    src: '../../../../../img/index/Fiat.webp',
    text: '相比较传统的银行转账，USDC转账通过区块链网络进行，只需要几分钟，结算速度更快。而且可以24/7全天候、自动化地执行，十分高效'
}, {
    title: '全球支付',
    src: '../../../../../img/index/Fiat-to-digital.webp',
    text: 'USDC是一种基于区块链技术的数字货币，可以在全球范围内自由流通且不受任何国家的监管和限制。无论您身处何处，只要有互联网的连接，就可以进行USDC转账，无需担心受到任何国家的限制和干扰'
}];


export default defineComponent({
    name: 'LeftRight',
    render() {
        return <div class={`container ${lr_box}`}>
            <div class="content flex-center">
                <div class={`flex-center ${list}`}>
                    {contentData.map(item => {
                        return <div class={`flex-between ${list_item}`}>
                            <div class={left}>
                                <h2 class={title}>{item.title}</h2>
                                <div class={text}>{item.text}</div>
                            </div>
                            <div class={right}>
                                <img src={item.src} alt="图片找不到" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>;
    },
});