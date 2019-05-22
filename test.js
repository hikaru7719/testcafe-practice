import { Selector } from "testcafe";

fixture("Getting Started")
.page("http://devexpress.github.io/testcafe/example");

test("my first test", async t => {
    await t.typeText("#developer-name", "Jhon Smith").click("#submit-button");
    const articleHeader = await Selector(".result-content").find("h1");

    let headerText = await articleHeader.innerText;
    await t.expect(Selector("#article-header").innerText).eql("Thank you, Jhon Smith!"); 
})
