import { Selector } from "testcafe";

fixture("Getting Started").page(
  "https://www.vlcm.net/rc/pc/index.php?action_CRA01_01do=true&cid=00131"
);

test("my first test", async t => {
  const clander = Selector(".calendars").child();
  console.log(clander.length);
});
