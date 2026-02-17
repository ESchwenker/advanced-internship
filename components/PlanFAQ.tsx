"use client"
import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

const faqData = [
{
title:"How does the free 7-day trial work?",
content:`Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.`
},
{
title:"Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
content:"While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option."
},
{
title:"What's included in the Premium plan?",
content:"Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle."
},
{
title:"Can I cancel during my trial or subscription?",
content:"You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day."
}
]

export default function PlanFAQ(){

const [open,setOpen]=useState<number|null>(0)

return(

<div className="planFAQ">

{faqData.map((item,i)=>{

const active=open===i

return(

<div key={i} className="faqItem">

<div
className="faqHeader"
onClick={()=>setOpen(active?null:i)}
>

<h3>{item.title}</h3>

<FiChevronDown className={`faqIcon ${active?"faqIcon--open":""}`} />

</div>

<div className={`faqContent ${active?"faqContent--open":""}`}>
    <div className="drop-down">
        <p>{item.content}</p>
    </div>
</div>

</div>

)

})}

</div>

)

}
