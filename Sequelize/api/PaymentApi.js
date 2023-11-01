import { format } from "../../helpers/index.js";
import { decrypt, encrypt } from "../Auth/index.js";
import { db } from "../models/index.js";
import _ from "lodash";

const { User, Group, Payment } = db;

export default {
  async getAllUserPayments({ id: UserId }) {

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

    let payments, group;

    group = await Group.findByPk(GroupId);

    if (!group) {
        throw new Error("getGroupPayments return no Group for GroupId input")
    }

    payments = group.getPayments({ where: { UserId } });

    if(!payments){
        throw new Error("groupPaymentsOfUser returned [] or bad input")
    }

    return format(payments);
  },

  async makePayment({GroupId, UserId, currency, amount, privacy}) {

    let paymentObj = {GroupId, UserId, currency, amount, privacy}

    let payment, group, user;

    group = await Group.findByPk(GroupId)

    if (!group) {
      return {
        __typename: "ServerError",
        status: "Error",
        code: "500",
        message: "Group Does not exist",
      }
    }

    user = format(await group.getMembers()).find(usr => usr.id === UserId)

    if (!user) {
      return {
        __typename: "ServerError",
        status: "Error",
        code: "500",
        message: "User in Group Does not exist",
      }
    }

    payment = await Payment.create(paymentObj);

    if (!payment) {
      return {
        __typename: "ServerError",
        status: "Error",
        code: "500",
        message: "makePayment did not create the Payment",
      }
    }

    return {
      __typename: "MakePaymentServerSuccess",
      status: "Success",
      payment: format(payment),
      code: 200
    }
      

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
