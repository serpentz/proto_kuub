import { PaymentApi } from "../../Sequelize/api/index.js";

export default {
  Query: {
    getAllUserPayments: async function(user) {
        return await PaymentApi.getAllUserPayments();
    },
    getPaymentsMadeToGroup: async function(group, user) {
        return await PaymentApi.getPaymentsMadeToGroup(group,user);
    }
  },
  Mutation: {
    makePayment:  async function(group, user) {
        return await PaymentApi.makePayment(group,user);
    },
    cancelPayment:  async function(group, user, options) {
        return await PaymentApi.cancelPayment(group,user,options);
    }
  },
};
