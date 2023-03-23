import { FooterState } from '@/views/footer/Footer';
import { defineComponent, watch } from 'vue';
import {
    left, list, list_item, lr_box, right, text, title
} from './LeftRight.module.scss';

const contentData = [{
    title: '什么是USDC？',
    src: '/img/index/bank.webp',
    text: 'USDC是一种完全储备的美元稳定币。USDC由受益监管。有执照的金融机构（Circle和Coinbase）共同开发、管理和发行。Circle以1 USDC：1 USD的比例保留全额的储备金，并以现金和短期美国国债的形式交由领先的金融机构保管。USDC受到美国政府金融犯罪网络的监管，需要定期接受世界顶级会计师事务所的审计，并发布报告',
}, {
    title: '稳定',
    src: '/img/index/Developers.webp',
    text: 'USDC的货币发行力量与美元的储备量一一对应，完全由现金和短期美国政府债务支持，因此其价值相对于稳定，适用于作为数字资产间的价值转移媒介。',
}, {
    title: '高效',
    src: '/img/index/Fiat.webp',
    text: '相比较传统的银行转账，USDC转账通过区块链网络进行，只需要几分钟，结算速度更快。而且可以24/7全天候、自动化地执行，十分高效',
}, {
    title: '全球支付',
    src: '/img/index/Fiat-to-digital.webp',
    text: 'USDC是一种基于区块链技术的数字货币，可以在全球范围内自由流通且不受任何国家的监管和限制。无论您身处何处，只要有互联网的连接，就可以进行USDC转账，无需担心受到任何国家的限制和干扰',
}];
const contentData2 = [{
    title: '什麽是USDC？',
    src: '/img/index/bank.webp',
    text: 'USDC是一種完全儲備的美元穩定幣。USDC由受益監管。有執照的金融機構（Circle和Coinbase）共同開發、管理和發行。Circle以1 USDC：1 USD的比例保留全額的儲備金，並以現金和短期美國國債的形式交由領先的金融機構保管。USDC受到美國政府金融犯罪網絡的監管，需要定期接受世界頂級會計師事務所的審計，並發布報告',
}, {
    title: '穩定',
    src: '/img/index/Developers.webp',
    text: 'USDC的貨幣發行力量與美元的儲備量一一對應，完全由現金和短期美國政府債務支持，因此其價值相對於穩定，適用於作為數字資產間的價值轉移媒介。',
}, {
    title: '高效',
    src: '/img/index/Fiat.webp',
    text: '相比較傳統的銀行轉賬，USDC轉賬通過區塊鏈網絡進行，只需要幾分鐘，結算速度更快。而且可以24/7全天候、自動化地執行，十分高效',
}, {
    title: '全球支付',
    src: '/img/index/Fiat-to-digital.webp',
    text: 'USDC是一種基於區塊鏈技術的數字貨幣，可以在全球範圍內自由流通且不受任何國家的監管和限製。無論您身處何處，只要有互聯網的連接，就可以進行USDC轉賬，無需擔心受到任何國家的限製和幹擾',
}];

export default defineComponent({
    name: 'LeftRight',
    data() {
        return {
            contentList: FooterState.isFan ? contentData2 : contentData as any,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                this.contentList = contentData2;
            } else {
                this.contentList = contentData;
            }
        });
    },
    render() {
        return <div class={`container ${lr_box}`}>
            <div class="content flex-center">
                <div class={`flex-center ${list}`}>
                    {this.contentList?.map((item: any) => {
                        return <div class={`flex-between ${list_item}`}>
                            <div class={left}>
                                <div class={title}>{item.title}</div>
                                <div class={text}>{item.text}</div>
                            </div>
                            <div class={right}>
                                <img src={item.src} alt="图片找不到" />
                            </div>
                        </div>;
                    })}
                </div>
            </div>
        </div>;
    },
});