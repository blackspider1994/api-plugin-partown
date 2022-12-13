export default async function extendAccountSchema(context) {
  context.simpleSchemas.Account.extend({
    "dob": {
      type: String,
      label:"dob",
      optional: true
    },
    "phone": {
      label:"phone",
      type: String,
      optional: true
    }
  });
  }