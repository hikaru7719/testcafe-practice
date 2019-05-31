import { Selector } from "testcafe";

fixture("Getting Started").page(
  "https://www.vlcm.net/rc/pc/index.php?action_CRA01_01do=true&cid=00131"
);

const myId = process.env.TESTCAFE_LOGIN_ID;
const myPass = process.env.TESTCAFE_LOGIN_PASS;
const myMail = process.env.TESTCAFE_LOGIN_MAIL;

test("my first test", async t => {
  const date = new Date().getDate();
  const clander = await Selector(".calendars")
    .child(2)
    .find("table")
    .find("tbody")
    .find("tr")
    .find("td")
    .withText(String(date - 1));

  await t.click(clander);

  const yoyaku = await Selector(".yoyaku")
    .nth(0)
    .find("tr")
    .nth(3)
    .find("td")
    .nth(-3);
  await t.click(yoyaku);

  const id = await Selector("input[name=memberlogin_Id]");
  const pass = await Selector("input[name=memberlogin_Pass]");
  const submit = await Selector("input[type=submit]");
  await t.typeText(id, myId);
  await t.typeText(pass, myPass);
  await t.click(submit);

  const name = await Selector("input[name=US_IN_USER_NM]");
  const kana = await Selector("input[name=US_IN_USERKANA_NM]");
  const mail = await Selector("input[name=US_IN_USERCNTCTMAIL_ADDR]");

  await t.typeText(name, "宮原光");
  await t.typeText(kana, "ミヤハラヒカル");
  await t.typeText(mail, myMail);

  const submit2 = await Selector("input[type=submit]");
  await t.click(submit2);
  const submit3 = await Selector("input[type=submit]");
  await t.click(submit3);
});
