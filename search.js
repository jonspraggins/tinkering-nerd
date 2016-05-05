function doSearch(query, given, middle, sur, city, state, area, prefix, line, email, username) {
    //"use strict";//
    var googlesite = 'https://www.google.com/search?q=site:';
    var goog = 'https://google.com/search?q=';
    var gimages = 'https://www.google.com/search?tbm=isch&q=';
    var ggroups = 'https://groups.google.com/forum/#!search/';
    var gnews = 'https://www.google.com/search?tbm=nws&q=';
    var gshop = 'https://www.google.com/search?tbm=shop&q=';
    var gbooks = 'https://www.google.com/search?tbm=bks&q=';
    var gtrends = 'https://www.google.com/trends/explore#q=';
    var gvid = 'https://www.google.com/search?tbm=vid&q=';
    var gscholar = 'https://scholar.google.com/scholar?q=';
    var youtube = 'https://www.youtube.com/results?search_query=';
    var bing = 'http://bing.com/search?q=';
    var bnews = 'https://www.bing.com/news/search?q=';
    var yahoo = 'http://search.yahoo.com/search?p=';
    var duckduck = 'https://duckduckgo.com/?q=';
    var howmany = 'http://howmanyofme.com/people/';
    var peoplesmart = 'https://www.peoplesmart.com/default-name-results?Find=';
    var whitepages = 'http://www.whitepages.com/name/';
    var thatsthem = 'http://thatsthem.com/search?tl=true&q0=';
    var spokeo = 'http://www.spokeo.com/search?q=';
    var reversegenie = 'http://www.reversegenie.com/people_search/';
    var kgbp = 'http://www.kgbpeople.com/people?fullname=';
    var radaris = 'https://radaris.com/p/';
    var intelius = 'https://www.intelius.com/results.php?ReportType=1&formname=name&qf=';
    var flipboard = 'http://www.flipboard.com/topic/';
    var reddit = 'https://www.reddit.com/search?q=';
    var efabula = 'http://www.efabula.com/search.php?q=';
    var boardreader = 'http://boardreader.com/s/';
    var whotalking = 'http://www.whotalking.com/';
    var pipl = 'http://api.pipl.com/search/v3/json/';
    var newslookup = 'http://newslookup.com/results?q=';
    var okcaller = 'http://www.okcaller.com/detail.php?number='

    if (gwebcb.checked) {
        if (given && sur !== "") {
            window.open(goog + given + '+' + sur, '_blank');
        }
        if (city && state !== "") {
            window.open(goog + '%22' + given + '+' + sur + '%22' + '+' + city + '%20' + state, '_blank');
        }
        if (middle !== "") {
            window.open(goog + given + '+' + middle + '+' + sur, '_blank');
        }
        if (area && prefix && line !== "") {
            window.open(goog + '%22' + area + '-' + prefix + '-' + line + '%22', '_blank');
        }
        if (username !== "") {
            window.open(goog + '%22' + username + '%22', '_blank');
        }
        if (query !== "") {
            window.open(goog + query, '_blank');
        }
    }
    if (gimgcb.checked) {
        if (given && sur !== "") {
            window.open(gimages + given + '+' + sur, '_blank');
        }
        if (query !== "") {
            window.open(gimages + query, '_blank');
        }
    }
    if (ggrpcb.checked) {
        if (given && sur !== "") {
            window.open(ggroups + given + '+' + sur, '_blank');
        }
        if (query !== "") {
            window.open(ggroups + query, '_blank');
        }
    }
    if (gnwscb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(gnews + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(gnews + given + '+' + sur, '_blank');
            }
            if (middle !== "") {
                window.open(gnews + given + '+' + middle + '+' + sur, '_blank');
            }
        }
    }
    if (gshpcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(gshop + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(gshop + given + '+' + sur, '_blank');
            }
        }
    }
    if (gbkscb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(gbooks + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(gbooks + given + '+' + sur, '_blank');
            }
        }
    }
    if (gslrcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(gscholar + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(gscholar + given + '+' + sur, '_blank');
            }
        }
    }
    if (gtndcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(gtrends + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(gtrends + given + '+' + sur, '_blank');
            }
        }
    }
    if (gvidcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(gvid + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(gvid + given + '+' + sur, '_blank');
            }
        }
    }
    if (ytcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(youtube + '%22' + query + '%22', '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(youtube + '%22' + given + '+' + sur + '%22', '_blank');
            }
        }
    }
    if (bingcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(bing + '%22' + query + '%22', '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(bing + given + '+' + sur, '_blank');
            }
            if (given && sur && city && state !== "") {
                window.open(bing + '%22' + given + '+' + sur + '%22' + '+' + city + '%20' + state, '_blank');
            }
            if (middle !== "") {
                window.open(bing + '%22' + given + '+' + middle + '+' + sur + '%22', '_blank');
            }
            if (area && prefix && line !== "") {
                window.open(bing + '%22' + area + '-' + prefix + '-' + line + '%22', '_blank');
            }
            if (username !== "") {
                window.open(bing + '%22' + username + '%22', '_blank');
            }
        }
    }
    if (bnwscb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(bnews + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(bnews + given + '+' + sur, '_blank');
            }
        }
    }
    if (yahocb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(yahoo + '%22' + query + '%22', '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(yahoo + given + '+' + sur, '_blank');
            }
            if (given && middle && sur !== "") {
                window.open(yahoo + '%22' + given + '+' + middle + '+' + sur + '%22', '_blank');
            }
            if (area && prefix && line !== "") {
                window.open(yahoo + '%22' + area + '-' + prefix + '-' + line + '%22', '_blank');
            }
            if (username !== "") {
                window.open(yahoo + '%22' + username + '%22', '_blank');
            }
        }
    }
    if (ddgcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(duckduck + '%22' + query + '%22', '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(duckduck + given + '+' + sur, '_blank');
            }
            if (given && middle && sur !== "") {
                window.open(duckduck + '%22' + given + '+' + middle + '+' + sur + '%22', '_blank');
            }
            if (area && prefix && line !== "") {
                window.open(duckduck + '%22' + area + '-' + prefix + '-' + line + '%22', '_blank');
            }
            if (username !== "") {
                window.open(duckduck + '%22' + username + '%22', '_blank');
            }
        }
    }
    if (hmmcb.checked) {
        if (given && sur !== "") {
            window.open(howmany + given + '_' + sur + '/', '_blank');
        }
    }
    if (pplsmcb.checked) {
        if (given && sur && city && state !== "") {
            window.open(peoplesmart + given + '+' + sur + '&Near=' + city + '%2C' + state, '_blank');
        }
    }
    if (whpgcb.checked) {
        if (given && sur && city && state !== "") {
            window.open(whitepages + given + '-' + sur + '/' + city + '-' + state, '_blank');
        }
    }
    if (thstmcb.checked) {
        if (given && sur && city && state !== "") {
            window.open(thatsthem + given + '+' + sur + '&city=' + city + '&state=' + state, '_blank');
        }
    }
    if (spokcb.checked) {
        if (given && sur !== "") {
            window.open(spokeo + given + '+' + sur, '_blank');
        }
    }
    if (revgcb.checked) {
        if (given && sur !== "") {
            window.open(reversegenie + given + '/' + sur, '_blank');
        }
    }
    if (kgbpcb.checked) {
        if (given && sur !== "") {
            window.open(kgbp + given + '+' + sur, '_blank');
        }
    }
    if (radrcb.checked) {
        if (given && sur !== "") {
            window.open(radaris + given + '/' + sur, '_blank');
        }
    }
    if (intlcb.checked) {
        if (given && sur && city && state !== "") {
            window.open(intelius + given + '&qmi=&qn=' + sur + '&qcs=' + city + '%2C+' + state, '_blank');
        }
    }
    if (piplcb.checked) {
        if (given && sur && city && state !== "") {
            window.open(pipl + '?first_name=' + given + '&last_name=' + sur + '&city=' + city + '&state=' + state + '&key=samplekey&pretty=true', '_blank');
        }
        if (email !== "") {
            window.open(pipl + '?email=' + email + '&key=samplekey&pretty=true', '_blank');
        }
    }
    if (pkyucb.checked) {
        if (given && sur !== "") {
            window.open('http://www.peekyou.com/' + given + '_' + sur, '_blank');
        }
    }
    if (tndgtcb.checked) {
        if (given && sur && city && state !== "") {
            window.open('http://10digits.us/n/' + given + '_' + sur + '/location/' + city + ',' + state, '_blank');
        }
    }
    if (zbscb.checked) {
        if (given && sur !== "") {
            window.open('http://www.zabasearch.com/people/' + given + '+' + sur, '_blank');
        }
    }
    if (ussrhcb.checked) {
        if (given && sur && city && state !== "") {
            window.open('https://www.ussearch.com/search/people/' + given + '/~/' + sur + '/' + city + '/' + state, '_blank');
        }
    }
    if (foocb.checked) {
        if (given && sur && city && state !== "") {
            window.open('http://www.411.com/name/' + given + '-' + sur + '/' + city + '-' + state, '_blank');
        }
    }
    if (fooicb.checked) {
        if (given && sur && city && state !== "") {
            window.open('https://411.info/people/?fn=' + given + '&ln=' + sur + '&cz=' + city + '%2C+' + state, '_blank');
        }
    }
    if (acccb.checked) {
        if (given && sur && city && state !== "") {
            window.open('http://www.accutellus.com/people/' + given + '+' + sur + '+' + state, '_blank');
        }
    }
    if (cicb.checked) {
        if (given && sur !== "") {
            window.open('http://www.census-info.us/search/' + sur + ',' + given, '_blank');
        }
    }
    if (abgcb.checked) {
        if (given && sur !== "") {
            window.open('http://www.advancedbackgroundchecks.com/search/results.aspx?type=&fn=' + given + '&ln=' + sur, '_blank');
        }
    }
    if (lnkdcb.checked) {
        if (given && sur !== "") {
            window.open(googlesite + 'linkedin.com+%22' + given + '+' + sur + '%22', '_blank');
        }
        if (middle !== "") {
            window.open(googlesite + 'linkedin.com+%22' + given + '+' + middle + '+' + sur + '%22', '_blank');
        }
    }
    if (fbcb.checked) {
        if (given && sur !== "") {
            window.open('https://www.facebook.com/public?query=' + given + '+' + sur + '&init=dir&nomc=0', '_blank');
            window.open(googlesite + 'facebook.com+%22' + given + '+' + sur + '%22', '_blank');
        }
    }
    if (twrcb.checked) {
        if (username !== "") {
            window.open('http://www.twitteraccountsdetails.com/' + username, '_blank');
        }
    }
    if (wtcb.checked) {
        if (given && sur !== "") {
            window.open(whotalking + given + '+' + sur, '_blank');
        }
        if (query !== "") {
            window.open(whotalking + query, '_blank');
        }
    }
    if (ircb.checked) {
        if (given && sur !== "") {
            window.open('http://www.icerocket.com/search?tab=buzz&q=' + given + '+' + sur, '_blank');
        }
    }
    if (fwcb.checked) {
        if (given && sur !== "") {
            window.open('http://followerwonk.com/bio/?q_type=all&n=' + given + '%20' + sur, '_blank');
        }
    }
    if (fpbdcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(flipboard + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(flipboard + given + '+' + sur, '_blank');
            }
        }
    }
    if (wmcb.checked) {
        if (given && sur !== "") {
            window.open('http://webmii.com/people?n=%22' + given + '%20' + sur + '%22', '_blank');
        }
    }
    if (nwslcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(newslookup + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(newslookup + given + '+' + sur, '_blank');
            }
        }
    }
    if (rddtcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(reddit + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(reddit + given + '+' + sur, '_blank');
            }
        }
    }
    if (efbcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(efabula + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(efabula + given + '+' + sur, '_blank');
            }
        }
    }
    if (emshcb.checked) {
        if (email !== "") {
            window.open('http://www.emailsherlock.com/emailsearch/' + email + '/', '_blank');
        }
    }
    if (brcb.checked) {
        if (termchk.checked) {
            if (query !== "") {
                window.open(boardreader + query, '_blank');
            }
        } else {
            if (given && sur !== "") {
                window.open(boardreader + given + ' ' + sur, '_blank');
            }
        }
    }
    if (actvcb.checked) {
        if (given && sur !== "") {
            window.open('http://results.active.com/search?utf8=%E2%9C%93&search%5Bquery%5D=' + given + '+' + sur + '&search%5Bsource%5D=participant', '_blank');
        }
    }
    if (pstcb.checked) {
        if (area && prefix && line !== "") {
            window.open('http://www.privacystar.com/lookup/' + area + '-' + prefix + '-' + line, '_blank');
        }
    }
    if (wcdcb.checked) {
        if (area && prefix && line !== "") {
            window.open('https://whocalld.com/+' + area + prefix + line, '_blank');
        }
    }
    if (mrnmcb.checked) {
        if (area && prefix && line !== "") {
            window.open('http://mrnumber.com/1-' + area + '-' + prefix + '-' + line, '_blank');
        }
    }
    if (trclcb.checked) {
        if (area && prefix && line !== "") {
            window.open('http://www.truecaller.com/us/' + area + '-' + prefix + '-' + line, '_blank');
        }
    }
    if (okcallcb.checked) {
        if (area && prefix && line !== "") {
            window.open(okcaller + area + prefix + line, '_blank');
        }
    }
}

function checkGoog(checkEm) 
    {
        var cbs = document.getElementsByTagName('input');
        for (var i = 0; i < cbs.length; i++) {
            if (cbs[i].type == 'checkbox') {
                if (cbs[i].name == 'google') {
                    cbs[i].checked = checkEm;
                }
            }
        }
    }
function checkMSE(checkEm) 
    {
        var cbs = document.getElementsByTagName('input');
        for (var i = 0; i < cbs.length; i++) {
            if (cbs[i].type == 'checkbox') {
                if (cbs[i].name == 'MSE') {
                    cbs[i].checked = checkEm;
                }
            }
        }
    }
function checkDV(checkEm) 
    {
        var cbs = document.getElementsByTagName('input');
        for (var i = 0; i < cbs.length; i++) {
            if (cbs[i].type == 'checkbox') {
                if (cbs[i].name == 'DV') {
                    cbs[i].checked = checkEm;
                }
            }
        }
    }
function checkSM(checkEm) 
    {
        var cbs = document.getElementsByTagName('input');
        for (var i = 0; i < cbs.length; i++) {
            if (cbs[i].type == 'checkbox') {
                if (cbs[i].name == 'SM') {
                    cbs[i].checked = checkEm;
                }
            }
        }
    }
function checkNM(checkEm) 
    {
        var cbs = document.getElementsByTagName('input');
        for (var i = 0; i < cbs.length; i++) {
            if (cbs[i].type == 'checkbox') {
                if (cbs[i].name == 'NM') {
                    cbs[i].checked = checkEm;
                }
            }
        }
    }
function checkEmail(checkEm) 
    {
        var cbs = document.getElementsByTagName('input');
        for (var i = 0; i < cbs.length; i++) {
            if (cbs[i].type == 'checkbox') {
                if (cbs[i].name == 'Email') {
                    cbs[i].checked = checkEm;
                }
            }
        }
    }
function checkOther(checkEm) 
    {
        var cbs = document.getElementsByTagName('input');
        for (var i = 0; i < cbs.length; i++) {
            if (cbs[i].type == 'checkbox') {
                if (cbs[i].name == 'Other') {
                    cbs[i].checked = checkEm;
                }
            }
        }
    }