import { format } from "../../helpers/index.js";
import { decrypt, encrypt } from "../Auth/index.js";
import { db } from "../models/index.js";
import _ from "lodash";

const { User, Group, Payment } = db;

export default {
  async getAllUserPayments(userObj) {
    const { id: UserId } = userObj;

    let user;

    user = await User.findByPk(UserId);

    if (!user) {
      return null;
    }

    return format(user.getPayments());
  },

  async getPaymentsMadeToGroup(groupObj, userObj) {
    const { id: GroupId } = groupObj;
    const { id: UserId } = userObj;

    let groupPaymentsOfUser, group;

    group = await Group.findByPk(GroupId);

    if (!group) {
        throw new Error("getGroupPayments return no Group for GroupId input")
    }

    groupPaymentsOfUser = group.getPayments({ where: { UserId } });

    if(!groupPaymentsOfUser){
        throw new Error("groupPaymentsOfUser returned [] or bad input")
    }
  },

  async makePayment(groupObj, userObj, options) {
    const { id: GroupId } = groupObj;
    const { id: UserId } = userObj;
    const {currency, amount} = options;

    let paymentObj = {GroupId, UserId, currency, amount}

    let payment;

    payment = await Payment.create(paymentObj);

    if (!payment) {
        throw new Error("makePayment did not create the Payment")
    }

    return format(payment)

  },
  async cancelPayment(paymentObj) {
    const { GroupId, UserId, id: PaymentId } = paymentObj;


    let payment;

    payment = await Payment.findByPk(PaymentId);

    payment.destroy()

    if (!payment) {
        throw new Error("makePayment did not create the Payment")
    }

    return format(payment)


  }
};
