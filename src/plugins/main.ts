import { BigNumber } from "ethers";
import Vue from "vue";

import moment from "moment";
import VueScrollTo from "vue-scrollto";

import Loader from "@/components/loader.vue";
import { depositsInterface, TokenSymbol } from "@/plugins/types";
import utils from "@/plugins/utils";

Vue.use(VueScrollTo);

Vue.component("Loader", Loader);

/**
 * Implementation of the tokenFormatter as a global filter
 */
Vue.filter("formatToken", (value: string, symbol: TokenSymbol) => {
  return utils.handleFormatToken(symbol, value);
});

/**
 * Implementation of the tokenFormatter as a global filter
 */
Vue.filter("formatUsdAmount", (value: false | string | BigNumber | TokenSymbol | depositsInterface, price: number, symbol: TokenSymbol) => {
  console.log(price, value);
  return utils.getFormattedTotalPrice(Number(price), +utils.handleFormatToken(symbol, <string>value));
});

/**
 * Format date as a human-readable "XX ago"
 * @todo consider switching with some ready component
 * Filtering human-readable time
 */
Vue.filter("formatTimeAgo", (time: moment.Moment | Date | string | number | (number | string)[] | moment.MomentInputObject | null | undefined) => moment(time).fromNow());

/**
 * Format date as a human-readable "XX ago"
 */
Vue.filter("formatDateTime", (time: moment.Moment | Date | string | number | (number | string)[] | moment.MomentInputObject | null | undefined) =>
  moment(time).format("M/D/YYYY h:mm:ss A"),
);

/**
 * Format date as a human-readable "XX ago"
 */
Vue.filter("formatTimeAgo", (time: moment.MomentInput) => moment(time).fromNow());

/**
 * Format date as a human-readable "XX ago"
 */
Vue.filter("formatDateTime", (time: moment.MomentInput) => moment(time).format("M/D/YYYY h:mm:ss A"));
