import { FooterState } from '@/views/footer/Footer';
import { ChevronDown, ChevronUpOutline } from '@vicons/ionicons5';
import { Icon } from '@vicons/utils';
import { defineComponent, watch } from 'vue';
import {
    card, drop_box, drop_list, drop_title
} from './DropCards.module.scss';

const currencyData = [
    {
        title: 'Circle API',
        des: '企业和品牌可使用 Circle API 来开发支持数字货币支付的产品，促进了 USDC 支付和一些其他功能。',
        link: 'https://www.circle.com/en/usdc/developers#usdc-multichain',
    }, {
        title: 'Visa',
        des: 'Visa已经开始支持USDC作为结算货币，这是一个连接数字货币和法定货币的重要创举。Visa利用以太坊区块链，可以在20秒内完成USDC的交易，且几乎免费。Visa估计，每年有120万亿美元的支付是通过支票和电汇进行的，这些支付方式费用高昂且效率低下。Visa通过使用USDC，可以为商家和消费者提供更快速、更便宜、更透明的支付体验。',
        link: 'https://www.visa.com.ag/about-visa/newsroom/press-releases/visa-network-to-settle-transactions-in-usd-coin-usdc.html',
    }, {
        title: 'Master Card',
        des: 'Master Card也支持了USDC',
        link: '#',
    }, {
        title: '中心化交易所',
        des: '中心化交易所也为商家提供支付解决方案（如Coinbase Commerce、Binance Pay、Circle Pay），包括交易所托管的支付界面和帮助商家自行部署前端的API和SDK。商家和其客户使用同一交易所托管的钱包不会产生任何费率，因为钱款只是在同一托管钱包里的不同账户间转账。商家或其客户其中一方使用自托管钱包会产生区块链网络费，因为加密币会转账到另一个钱包地址。商家也可以选择在收款时把加密币自动转换成法币，并存在交易所托管的银行账户上或者直接存在商家自己的银行账户上。如果是后者，交易所需要帮商家开一个商业法币账户。',
        link: '/investment/?fan=&from=intoout&item=中心化交易所',
    }, {
        title: '其他',
        des: '其他提供加密货币支付服务的公司。',
        link: '/investment/?fan=&from=use&item=支付',
    },
];
const currencyData2 = [
    {
        title: 'Circle API',
        des: '企業和品牌可使用 Circle API 來開發支持數字貨幣支付的產品，促進了 USDC 支付和一些其他功能。',
        link: 'https://www.circle.com/en/usdc/developers#usdc-multichain',
    }, {
        title: 'Visa',
        des: 'Visa已經開始支持USDC作為結算貨幣，這是一個連接數字貨幣和法定貨幣的重要創舉。Visa利用以太坊區塊鏈，可以在20秒內完成USDC的交易，且幾乎免費。Visa估計，每年有120萬億美元的支付是通過支票和電匯進行的，這些支付方式費用高昂且效率低下。Visa通過使用USDC，可以為商家和消費者提供更快速、更便宜、更透明的支付體驗。',
        link: 'https://www.visa.com.ag/about-visa/newsroom/press-releases/visa-network-to-settle-transactions-in-usd-coin-usdc.html',
    }, {
        title: 'Master Card',
        des: 'Master Card也支持了USDC',
        link: '#',
    }, {
        title: '中心化交易所',
        des: '中心化交易所也為商家提供支付解決方案（如Coinbase Commerce、Binance Pay、Circle Pay），包括交易所托管的支付界面和幫助商家自行部署前端的API和SDK。商家和其客戶使用同一交易所托管的錢包不會產生任何費率，因為錢款只是在同一托管錢包裏的不同賬戶間轉賬。商家或其客戶其中一方使用自托管錢包會產生區塊鏈網絡費，因為加密幣會轉賬到另一個錢包地址。商家也可以選擇在收款時把加密幣自動轉換成法幣，並存在交易所托管的銀行賬戶上或者直接存在商家自己的銀行賬戶上。如果是後者，交易所需要幫商家開一個商業法幣賬戶。',
        link: '/investment/?fan=&from=intoout&item=中心化交易',
    }, {
        title: '其他',
        des: '其他提供加密貨幣支付服務的公司。',
        link: '/investment/?fan=&from=use&item=支付',
    },
];

export default defineComponent({
    name: 'DropCards',
    data() {
        return {
            dropList: FooterState.isFan ? currencyData2 : currencyData as any,
            isSpread: false,
        };
    },
    mounted() {
        watch(() => FooterState.isFan, newValue => {
            if (FooterState.isFan) {
                this.dropList = currencyData2;
            } else {
                this.dropList = currencyData;
            }
        });
    },
    render() {
        return <div class={`container ${drop_box}`}>
            <div class="content flex-center">
                <div class="content flex-between">
                    <div class={drop_title}>{FooterState.isFan ? '給自己的產品接入數字貨幣支付' : '给自己的产品接入数字货币支付'}</div>
                    <div style={{ cursor: 'pointer' }} onClick={() => this.isSpread = !this.isSpread}>
                        {this.isSpread ? <Icon size="36" color="#000">
                            <ChevronUpOutline></ChevronUpOutline>
                        </Icon> : <Icon size="36" color="#000">
                            <ChevronDown></ChevronDown>
                        </Icon>
                        }
                    </div>
                </div>
                {this.isSpread ? <div class={`flex-between ${drop_list}`} style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                    {this.dropList?.map((item: any) => {
                        return <div class={`flex-between ${card}`}>
                            <h2>{item.title}</h2>
                            <p>{item.des}</p>
                            {!item.link.includes('fan') ? <a href={item.link} target="_blank" >更多</a>
                                : <a href={item.link.replace('fan=', `fan=${FooterState.isFan}`)}>更多</a>}
                        </div>;
                    })}
                </div> : null}
            </div>
        </div>;
    },
});