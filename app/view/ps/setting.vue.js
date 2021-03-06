var yesno=[
    {
        text:"crwdns526:0crwdne526:0",
        value:"yes"
    },{
        text:"crwdns527:0crwdne527:0",
        value:"no"
    }
];
var sound=[
    {
        text:"@@none@@",
        value:"none"
    },{
        text:"@@default@@",
        value:"default"
    },{
        text:"Custom 1",
        value:"c1"
    },{
        text:"Custom 2",
        value:"c2"
    },{
        text:"Custom 3",
        value:"c3"
    },{
        text:"Custom 4",
        value:"c4"
    }
];
var envConstruction=[
    {
        id:"popup",
        storage:"popup",
        checkbox:false,
        doubleText:false,
        setValue:0,
        width:50,
        text:{
            head:"crwdns1898:0crwdne1898:0",
            desc:'crwdns536:0crwdne536:0',
            after:"crwdns537:0crwdne537:0"
        }
    },{
        id:"notf",
        storage:"nativenotf",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns538:0crwdne538:0",
            desc:"crwdns539:0crwdne539:0",
            checkbox:yesno
        }
    },{
        id:"width",
        storage:"width",
        checkbox:false,
        doubleText:false,
        width:50,
        setValue:300,
        text:{
            head:"crwdns2376:0crwdne2376:0",
            desc:"crwdns542:0crwdne542:0",
            after:"px crwdns543:0crwdne543:0"
        }
    },{
        id:"fixwidth",
        storage:"fixwidth",
        checkbox:false,
        doubleText:false,
        setValue:300,
        width:50,
        text:{
            head:"crwdns2378:0crwdne2378:0",
            desc:"crwdns2380:0crwdne2380:0",
            after:"px crwdns543:0crwdne543:0"
        }
    },{
        id:"size",
        storage:"size",
        checkbox:false,
        doubleText:false,
        width:50,
        setValue:13,
        text:{
            head:"crwdns546:0crwdne546:0",
            desc:'<span style="font-size:13px">13px(crwdns549:0crwdne549:0)</span>',
            after:"px"
        }
    },{
        id:"ha",
        storage:"ha",
        checkbox:true,
        setValue:false,
        text:{
            head:"@@hardwareAcceleration@@",
            desc:"@@hardwareAccelerationWarn@@",
            checkbox:[
                {
                    text:"crwdns526:0crwdne526:0",
                    value:"true"
                },{
                    text:"crwdns527:0crwdne527:0",
                    value:"false"
                }
            ]
        }
    }
];
var tlConstruction=[
    {
        id:"time",
        storage:"datetype",
        checkbox:true,
        setValue:"absolute",
        text:{
            head:"crwdns551:0crwdne551:0",
            desc:'crwdns552:0crwdne552:0<br>crwdns553:0crwdne553:0<br>crwdns554:0crwdne554:0',
            checkbox:[
                {
                    text:"crwdns555:0crwdne555:0",
                    value:"relative"
                },{
                    text:"crwdns1902:0crwdne1902:0",
                    value:"absolute"
                },{
                    text:"crwdns557:0crwdne557:0",
                    value:"double"
                },{
                    text:"crwdns558:0crwdne558:0",
                    value:"medium"
                }

            ]
        }
    },{
        id:"ul",
        storage:"locale",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns1904:0crwdne1904:0",
            desc:"crwdns1906:0crwdne1906:0",
            checkbox:yesno
        }
    },{
        id:"nsfw",
        storage:"nsfw",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns561:0crwdne561:0",
            desc:"crwdns562:0crwdne562:0",
            checkbox:yesno
        }
    },{
        id:"cw",
        storage:"cw",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns563:0crwdne563:0",
            desc:"",
            checkbox:yesno
        }
    },{
        id:"rp",
        storage:"replyct",
        checkbox:true,
        setValue:"hidden",
        text:{
            head:"crwdns564:0crwdne564:0",
            desc:"",
            checkbox:[
                {
                    text:"crwdns565:0crwdne565:0",
                    value:"hidden"
                },{
                    text:"crwdns565:0crwdne565:0",
                    value:"all"
                }

            ]
        }
    },{
        id:"gif",
        storage:"gif",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns567:0crwdne567:0",
            desc:"",
            checkbox:yesno
        }
    },{
        id:"tag",
        storage:"tag-range",
        checkbox:true,
        setValue:"local",
        text:{
            head:"crwdns572:0crwdne572:0",
            desc:"",
            checkbox:[
                {
                    text:"crwdns573:0crwdne573:0",
                    value:"all"
                },{
                    text:"crwdns574:0crwdne574:0",
                    value:"local"
                }

            ]
        }
    },{
        id:"via",
        storage:"viashow",
        checkbox:true,
        setValue:"no",
        text:{
            head:"crwdns575:0crwdne575:0",
            desc:"",
            checkbox:yesno
        }
    },{
        id:"mov",
        storage:"mouseover",
        checkbox:true,
        setValue:"no",
        text:{
            head:"crwdns576:0crwdne576:0",
            desc:"crwdns577:0crwdne577:0",
            checkbox:[
                {
                    text:"crwdns578:0crwdne578:0",
                    value:"yes"
                },{
                    text:"crwdns579:0crwdne579:0",
                    value:"click"
                },{
                    text:"crwdns527:0crwdne527:0",
                    value:"no"
                }

            ]
        }
    },{
        id:"notfm",
        storage:"setasread",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns580:0crwdne580:0",
            desc:"",
            checkbox:yesno
        }
    },{
        checkbox:false,
        doubleText:true,
        data:[
            {
                id:"sentence",
                storage:"sentence",
                width:50,
                setValue:500,
                text:{after:"crwdns583:0crwdne583:0 crwdns543:0crwdne543:0 crwdns585:0crwdne585:0"}
            },{
                id:"letters",
                storage:"letters",
                width:50,
                setValue:7000,
                text:{after:"crwdns584:0crwdne584:0 crwdns543:0crwdne543:0"}
            }
        ],
        text:{
            head:"crwdns581:0crwdne581:0",
            desc:"crwdns582:0crwdne582:0",
        }
    },{
        id:"img-height",
        storage:"img-height",
        checkbox:false,
        doubleText:false,
        width:80,
        setValue:200,
        text:{
            head:"crwdns586:0crwdne586:0",
            desc:'@@imgheightwarn@@',
            after:"px"
        }
    },{
        id:"ticker",
        storage:"ticker_ok",
        checkbox:true,
        setValue:"no",
        text:{
            head:"crwdns1908:0crwdne1908:0",
            desc:'crwdns1910:0crwdne1910:0',
            checkbox:yesno
        }
    },{
        id:"anime",
        storage:"animation",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns2446:0crwdne2446:0",
            desc:"",
            checkbox:yesno
        }
    },{
        id:"replySound",
        storage:"replySound",
        checkbox:true,
        setValue:"none",
        text:{
            head:"@@replySound@@",
            desc:"",
            checkbox:sound
        }
    },{
        id:"favSound",
        storage:"favSound",
        checkbox:true,
        setValue:"none",
        text:{
            head:"@@favSound@@",
            desc:"",
            checkbox:sound
        }
    },{
        id:"btSound",
        storage:"btSound",
        checkbox:true,
        setValue:"none",
        text:{
            head:"@@btSound@@",
            desc:"",
            checkbox:sound
        }
    },{
        id:"followSound",
        storage:"followSound",
        checkbox:true,
        setValue:"none",
        text:{
            head:"@@followSound@@",
            desc:"",
            checkbox:sound
        }
    }
];
var postConstruction=[
    {
        id:"cw-text",
        storage:"cw-text",
        checkbox:false,
        doubleText:false,
        width:150,
        setValue:"",
        text:{
            head:"crwdns590:0crwdne590:0",
            desc:"",
            after:""
        }
    },{
        checkbox:false,
        doubleText:true,
        data:[
            {
                id:"cw_sentence",
                storage:"cw_sentence",
                width:50,
                setValue:500,
                text:{after:"crwdns583:0crwdne583:0 crwdns543:0crwdne543:0 crwdns585:0crwdne585:0"}
            },{
                id:"cw_letters",
                storage:"cw_letters",
                width:50,
                setValue:7000,
                text:{after:"crwdns584:0crwdne584:0 crwdns543:0crwdne543:0"}
            }
        ],
        text:{
            head:"crwdns588:0crwdne588:0",
            desc:"crwdns589:0crwdne589:0",
        }
    },{
        id:"cws",
        storage:"always-cw",
        checkbox:true,
        setValue:"no",
        text:{
            head:"crwdns591:0crwdne591:0",
            desc:"",
            checkbox:yesno
        }
    },{
        id:"vis",
        storage:"vis",
        checkbox:true,
        setValue:"public",
        text:{
            head:"crwdns592:0crwdne592:0",
            desc:"",
            checkbox:[
                {
                    text:"crwdns593:0crwdne593:0",
                    value:"public"
                },{
                    text:"crwdns594:0crwdne594:0",
                    value:"unlisted"
                },{
                    text:"crwdns595:0crwdne595:0",
                    value:"private"
                },{
                    text:"crwdns596:0crwdne596:0",
                    value:"direct"
                },{
                    text:"crwdns1912:0crwdne1912:0",
                    value:"memory"
                },{
                    text:"crwdns1914:0crwdne1914:0",
                    value:"useapi"
                }
            ]
        }
    },{
        id:"img",
        storage:"img",
        checkbox:true,
        setValue:"no-act",
        text:{
            head:"crwdns599:0crwdne599:0",
            desc:"",
            checkbox:[
                {
                    text:"crwdns600:0crwdne600:0",
                    value:"url"
                },{
                    text:"crwdns601:0crwdne601:0",
                    value:"no-act"
                }
            ]
        }
    },{
        id:"box",
        storage:"box",
        checkbox:true,
        setValue:"yes",
        text:{
            head:"crwdns568:0crwdne568:0",
            desc:"",
            checkbox:[
                {
                    text:"crwdns569:0crwdne569:0",
                    value:"yes"
                },{
                    text:"crwdns571:0crwdne571:0",
                    value:"no"
                },{
                    text:"crwdns570:0crwdne570:0",
                    value:"absolute"
                }
            ]
        }
    },{
        id:"quote",
        storage:"quote",
        checkbox:true,
        setValue:"nothing",
        text:{
            head:"crwdns603:0crwdne603:0",
            desc:"",
            checkbox:[
                {
                    text:"crwdns604:0crwdne604:0",
                    value:"simple"
                },{
                    text:"crwdns605:0crwdne605:0",
                    value:"mention"
                },{
                    text:"crwdns606:0crwdne606:0",
                    value:"full"
                },{
                    text:"@@notqt@@",
                    value:"nothing"
                }
            ]
        }
    },{
        id:"main",
        storage:"mainuse",
        checkbox:true,
        setValue:"remain",
        text:{
            head:"crwdns607:0crwdne607:0",
            desc:"crwdns608:0crwdne608:0",
            checkbox:[
                {
                    text:"crwdns609:0crwdne609:0",
                    value:"remain"
                },{
                    text:"crwdns610:0crwdne610:0",
                    value:"main"
                }
            ]
        }
    },{
        id:"sec",
        storage:"sec",
        checkbox:true,
        setValue:"public",
        text:{
            head:"crwdns1916:0crwdne1916:0",
            desc:"",
            checkbox:[
                {
                    text:"crwdns1920:0crwdne1920:0",
                    value:"nothing"
                },{
                    text:"crwdns593:0crwdne593:0",
                    value:"public"
                },{
                    text:"crwdns594:0crwdne594:0",
                    value:"unlisted"
                },{
                    text:"crwdns595:0crwdne595:0",
                    value:"private"
                },{
                    text:"crwdns596:0crwdne596:0",
                    value:"direct"
                },{
                    text:"crwdns1922:0crwdne1922:0",
                    value:"local",
                    kirishima:true,
                    kirishimaText:"非対応インスタンスでは「未収載」になります。"
                }
            ]
        }
    },{
        id:"zero",
        storage:"emoji-zero-width",
        checkbox:true,
        setValue:"normal",
        setValue:"no",
        text:{
            head:"@@zeroWidthEmoji@@",
            desc:"",
            checkbox:yesno
        }
    }
]