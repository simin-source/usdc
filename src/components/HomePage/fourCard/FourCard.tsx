import { defineComponent } from 'vue';
import {
    card_box, section, card, title
} from './FourCard.module.scss';

let contairData = [{
    title: 'Tether for Individuals',
    text: 'Tether tokens offer exceptional liquidity on tier one exchanges giving traders the ability to take advantage of arbitrage opportunities in the fastest time possible.',
}, {
    title: 'Tether for Merchants',
    text: 'MuiTypography-root jss162 MuiTypography-caption',
}, {
    title: 'Tether for Individuals',
    text: 'Tether tokens offer exceptional liquidity on tier one exchanges giving traders the ability to take advantage of arbitrage opportunities in the fastest time possible.',
}, {
    title: 'Tether for Merchants',
    text: 'MuiTypography-root jss162 MuiTypography-caption',
}];

export default defineComponent({
    name: 'FourCard',
    render() {
        return <div class={`container ${card_box}`}>
            <div class="content flex-center">
                <h3 class={title}>The token that is disrupting the global financial industry</h3>
                <div class={`flex-between ${section}`}>
                    {contairData.map(item => {
                        return <div class={card}>
                            <img src="/img/index/favicon.ico" alt="icon找不到" />
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>;
    },
});