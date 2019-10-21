<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>

# CascadiaJS 💗 Open Source Maintainers</h1>

Every single tech company that you can think, including the Unicorns that are either privately or publicly worth more than $1 billion, are built on top of open source software (OSS). But the vast majority of the people who maintain these projects are not compensated for their work.

This has been an active topic of conversation in the community and Twitter is chock full of opinions here. Here are two articles very much worth reading:

* [Recap of the `funding` experiment](https://feross.org/funding-experiment-recap/) by Feross Aboukhadijeh
* [Who do npm users depend on?](https://medium.com/oss-trends/who-do-npm-users-depend-on-da66c3db019d) by Mikeal Rogers

CascadiaJS doesn't have the resources to pay OSS maintainers for the work they do, but we can certainly make it easier for them to attend our technical conference. 

If you are an active maintainer of an NPM module that is highly-depended upon by the NPM ecosystem, please enter your NPM username below and we'll let you know if you qualify for a discount (or completely free!) ticket to CascadiaJS 2019.

<input id="owner" type="text" placeholder="npm username"></input>
<div id="feedback" style="background-color:#eee;padding:5px;border:1px solid #ccc">Waiting on input...</div>
<script>
const get = () => document.getElementById('owner').value
const ranks = new Map()
const step = row => {
    row = row.data
    ranks.set(row.OWNER, parseFloat(row.SSCORE))
}
const feedback = str => document.getElementById('feedback').innerHTML = str
const complete = () => {
    const check = () => {
        const owner = get()
        if (!owner) {
            feedback('Waiting on input...')
            return
        }
        if (ranks.has(owner)) {
            let rank = ranks.get(owner)
            if (rank > .99) {
                feedback('Congratulations! You are in the top 1% of contributors and eligible for a COMPLETELY FREE ticket to CascadiaJS!<br/><br/>Please send @CascadiaJS a DM on Twitter to claim your discount 💰')
            } 
            else {
                let discount = (rank - .88) * 1000
                if (discount > 100) discount = 100
                discount = Math.ceil(discount)
                feedback(`Congratulations! You are eligible for a ${ discount }% discount to CascadiaJS!<br/><br/>Please send @CascadiaJS a DM on Twitter to claim your discount 💰`)
            }
        } else {
            feedback(`${owner} is not in the top 10% of maintainers of npm packages.`)
        }
    }
    document.getElementById('owner').addEventListener('keyup', () => {
        check()
    })
    check()
}
Papa.parse('/_static/maintainers.csv', { header: true, download: true, step, complete })
</script>