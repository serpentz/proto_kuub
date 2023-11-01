import { PaymentApi } from "../../Sequelize/api/index.js";

export default {
  Query: {
    getAllUserPayments: async function(user) {
        return await PaymentApi.getAllUserPayments(user);
    },
    getPaymentsMadeToGroup: async function(group, user) {
        return await PaymentApi.getPaymentsMadeToGroup(group,user);
    }
  },
  Mutation: {
    makePayment:  async function(_ , {payment}, context, args) {
        return await PaymentApi.makePayment(payment);
    },
    cancelPayment:  async function(payment) {
        return await PaymentApi.cancelPayment(payment);
    }
  },
};
