import { defineComponent } from 'vue';
import {
    banner_box, desc, logo, slogan,
} from './Banner.module.scss';

export default defineComponent({
    name: 'Banner',
    render() {
        return <div class={`container ${banner_box}`}>
            <div class="content flex-center">
                <div class={`flex-center ${logo}`}>入金&出金 </div>
                <div class={slogan}>xxxxxxxxxxxx</div>
                <div class={desc}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            </div>
        </div>;
    },
});