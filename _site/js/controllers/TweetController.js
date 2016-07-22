/*global app:true */
app.controller('TweetController', ['$scope', function($scope) {

var corbynAv = 'img/corbyn-av.png';
var cameronAv = 'img/cameron-av.png';
var eagleAv = 'img/eagle-av.png';
var osborneAv = 'img/osborne-av.png';
var mayAv = 'img/may-av.png';

$scope.debateSelector = {date: 'hideall'};

$scope.debates = [

  { date: 'Select a date' },

  {
    date: '20th July 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g817.0',
        message: 'Will you now proceed with a full public inquiry into the terrible events at Orgreave?'
      },
      {
        politician: 'Theresa May',
        avatar: mayAv,
        side: 'right',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g817.1',
        message: 'The Home Secretary will be responding on that matter this afternoon.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g817.2',
        message: 'What is your target for home ownership among young people?'
      },
      {
        politician: 'Theresa May',
        avatar: mayAv,
        side: 'right',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g817.3',
        message: 'This Government are putting more into building more homes to ensure that young people can get on the housing ladder'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g818.0',
        message: 'Before appointing your new Foreign Secretary [Boris Johnson], did you challenge him on his description of black people as "piccaninnies"?'
      },
      {
        politician: 'Theresa May',
        avatar: mayAv,
        side: 'right',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g818.1',
        message: 'As Home Secretary, I dealt with the issue of stop and search based on the colour of someone\'s skin.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g818.2',
        message: 'Six years of austerity have failed. Is there a new long-term economic plan?'
      },
      {
        politician: 'Theresa May',
        avatar: mayAv,
        side: 'right',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g818.3',
        message: 'We haven\'t abandoned our intention to move to surplus, but we won\'t target it in this Parliament. It\'s important that we live within our means.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g818.4',
        message: 'Will you scrap employment tribunal fees, repeal the Trade Union Act and ban zero-hours contracts in order to give better job security?'
      },
      {
        politician: 'Theresa May',
        avatar: mayAv,
        side: 'right',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g819.0',
        message: 'This Government has raised the income tax threshold and have made sure we have more well-paid jobs in this country.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g819.1',
        message: 'Two thirds of children living in poverty have at least one parent in work. What are you going to do for those families?'
      },
      {
        politician: 'Theresa May',
        avatar: mayAv,
        side: 'right',
        source: 'https://www.theyworkforyou.com/debates/?id=2016-07-20a.816.5#g819.2',
        message: 'The answer isn\'t uncapped welfare. If we have a strong economy, then everyone can benefit from the nation\'s wealth.'
      }
    ]
  },

  {
    date: '20th April 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g911.1',
        message: 'Why is the government forcing all schools to become academies?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g911.2',
        message: 'We want schools to be run by headteachers, not bureaucrats; and evidence shows that academies perform better.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g911.3',
        message: 'The Education Committee - and so many others - disagree with you. Why are you ignoring their evidence?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g911.4',
        message: 'One example is Downhills Primary, near your constituency. It was in special measures and taken over by an academy, and two years later it was a good school.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g912.0',
        message: 'Why should good school leaders focus their time not on educating children but on changes imposed from above?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g912.1',
        message: 'Good schools have nothing to fear, but instead a huge amount to gain from becoming academies.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g912.2',
        message: 'Do you at least understand the anger that so many feel because a system they don\'t want is being imposed on them?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g912.3',
        message: 'There will always be people who want to keep things exactly as they are, but the benefits of academies are clear.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g913.0',
        message: 'I spoke with some year 6 pupils last week who themselves said that they love their school the way it is. What do you say to these pupils?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g913.1',
        message: 'We need to reform to make good schools even better and to help raise the aspiration of all.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g913.2',
        message: 'School spending is expected to fall by 7% in real terms in the next 4 years. So why are you proposing to spend £1.3bn on top-down reorganisation that wasn\'t in your manifesto?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.theyworkforyou.com/debates/?id=2016-04-20a.910.8#g913.3',
        message: 'We\'ve protected spending per pupil through this parliament and the last. We\'re spending £7bn on more school places.'
      },
    ]
  },

  {
    date: '24th February 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: '9 out of 10 junior doctors already work beyond their contract. What do you think of the Health Secretary\'s veto of a deal?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'He didn\'t veto a deal. No junior doctor\'s will receive a pay cut - in fact, the contract has tougher safeguards to make sure it reduces the hours worked.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'This whole dispute is based on misrepresented research about weekend mortalities. Are you being rash and misleading with the research?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'The research in fact understates the statistics. There are 11,000 excess deaths at the weekends rather than the claimed 6,000.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Is it not time to apologise for misleading statements and reach a settlement with junior doctors, as Governments in Scotland and Wales have done?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Scotland and Wales aren\'t trying to create a seven-day NHS. We\'re putting £10bn more into the NHS and have 10,000 more doctors and 10,000 more nurses.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'We all want a strong NHS but the Government is failing to get on top of agency staff costs, which now amounts to £4bn. Your own local NHS service has spent £30m on agency staff.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: '*Slagging off a back bench Labour heckler. No response to question.*'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'We\'re nearing the end of the financial year and the NHS deficit is £2.26bn. What will the deficit be by the end of next month?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Deficits are coming down because we\'re clamping down on agency fees. We are investing in excess of our pledges for the NHS.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'There is already 7 day emergency service. How does increasing elective work improve safety at the weekend? Will you publish the DoH\'s analysis of the real cost of a 7-day NHS?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Hospitals such as the Salford Royal already operate on a 7-day basis within budget. We don\'t just get ill Monday to Friday. We\'re funding a world-class NHS.'
      }
    ]
  },

  {
    date: '10th February 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spnew58',
        message: 'What action are you taking to help young people to find affordable places to live?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spmin10',
        message: 'We have launched the help-to-save-ISAs and people can earn £11,000 before they pay any taxes. Housing association tenants can buy their home and there\'s also Help to Buy.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spnew59',
        message: 'You said that council homes sold under the right to buy would be replaced like for like. How is that policy panning out?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spmin11',
        message: 'We\'ve said that two homes are built for every council home in London that is sold.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spnew60',
        message: 'Just one home has been built for every eight that have been sold under your government. Housing cuts are also putting vulnerable people at risk.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spmin12',
        message: 'We have an £8bn housing budget to build 400,000 affordable homes. We cut housing benefit as it was out of control.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spnew61',
        message: 'Housing providers estimate that nearly half of all supported housing schemes will close. Will you stop this cut which will destroy the supported housing sector?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spmin12',
        message: 'We\'re actually reducing social rents by 1% every year for 4 years. We\'re also going to make it so that we\'re not paying housing benefit to social tenants way above what we would pay to private sector tenants.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spnew62',
        message: 'Shelter say the bill will lose 180,000 affordable homes. Tory back-benchers voted against an amendment for homes to be fit for human habitation. How many privately rented homes do not meet hte decent homes standard?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spmin14',
        message: 'We\'ve built more council houses in the last 5 years than Labour did in 13 years. Our housing budget is £8bn and that will provide 400,000 affordable new homes.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spnew63',
        message: 'One third of privately rented homes do not meet the decent homes standard. People are struggling and homelessness is rising. When is the PM going to realise there is a housing crisis in Britain?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160210/debtext/160210-0001.htm#160210-0001.htm_spmin15',
        message: 'Homelessness today is less than half what it was at its peak under the last Labour government. We\'re investing in homes because we have a strong economy.'
      }
    ]
  },

  {
    date: '3rd February 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'There has been a 36% increase in the number of people waiting more than 6 weeks for cancer diagnostic tests. Can you do something to bring that down?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Compared to 2010, there\'s been a 71% increase in the number of patients being seen with suspected cancers and 17% increase in patients being treated for cancer.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'The government\'s independent cancer taskforce reported last year that we have a shortage of radiologists. Why are we cutting radiographer training places by 5%?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'We are opening up nurse training to an extra 10,000 nurses and spending £19bn more on the NHS. There are 15% more radiographers now than when I became Prime Minister.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'You\'re proposing to cut £200m from the public health budget which funds programmes such as anti-obesity. This will surely lead to an increase in cancer?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Under this government we have made real advances including smoking rules in cars and plain paper packaging.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Can you tell us the last time the NHS target for starting cancer treatment within the 62 days required was actually met?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Of our 3 big targets, we\'re meeting 2: see a specialist within 2 weeks and first treatment within 31 days of diagnosis. We are currently falling short of the 62 days target.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Cuts to employment and support allowance will also hit 3,200 people with cancer who are too unwell to work. Will you uphold the Lords\' rejection of these proposed cuts?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'If someone has cancer and cannot work, they continue to get the welfare payments they need through the ESA.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'But you are cutting the amount of ESA. Macmillan, Rethink Mental Illness and Parkinson\'s UK are all opposing this cut.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'If you are an existing claimant, your welfare is not changing. In future, we should help those who are able to get back to work to do so.'
      }
    ]
  },

  {
    date: '27th January, 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'Experts have suggested that Google is paying an effective tax rate on its UK profits of around 3%. Does the Prime Minister dispute that figure?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'I do dispute the figures. No government has done more than this one to crack down on tax evasion and tax avoidance.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'We\'ve been getting mixed messages from your party on whether this payment by Google is a success or not. What exactly is your position?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'We\'ve put in place the diverted profits tax. They will pay more tax than ever under Labour, when the tax rate for Google was 0%.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'Jeff asks, \'As a working man of over 30 years, can the PM tell me if there\'s a scheme I can join to pay the same rate of tax as Google?\''
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'I would say to Jeff that his taxes are coming down under this government, whilst Google\'s are going up.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'Many people sending in their tax returns this week will wonder why there is one rule for big multinational companies and another for small businesses and self-employed workers?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'HMRC\'s work is investigated by the National Audit Office, who said that the settlements it had reached were fair.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'The Court of Appeal has ruled that the bedroom tax is discriminatory. Will you now abandon this policy, which has been ruled to be illegal?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'It\'s unfair to subsidise spare rooms in the social sector if we do not subsidise them in the private sector where people are paying housing benefit.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'The UN claim that coalition forces in Yemen have conducted airstrikes against civilians. Will the PM agree to launch an immediate inquiry and review the arms export licenses to Saudi Arabia?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/114/',
        message: 'We have very strict arms export rules. We are not involved with the Saudi-led coalition. I will look at the report as I look at all other reports. We want stability in the Yemen.'
      }
    ]
  },

  {
    date: '20th January, 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spnew63',
        message: 'Where in your election manifesto did you put your plan to abolish maintenance grants for all students?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spmin11',
        message: 'In our manifesto, we said that we would cut the deficit and uncap student numbers, and we have done both.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spnew66',
        message: 'Liam is training to be a maths teacher and will now finish his course with debts in excess of £50,000; double what his annual salary will be. Why is he being put into such debt?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spmin12',
        message: 'He won\'t pay back anything until he is earning over £21k and won\'t start paying back in full until he is earning £35k. Our policy puts more money in the hands of students.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spnew67',
        message: 'When you trebled tuition fees in 2010, you said you would increase maintenance grants; which you\'re now scrapping. Why are you abolishing these grants?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spmin13',
        message: 'We\'re doing it to uncap university places so that anyone who wants to go to university can. The system we have is working and the numbers prove it.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spnew68',
        message: 'The repayments that student nurses will now have to make when qualified amount to an effective pay cut of £900. Why are you punishing nurses?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spmin14',
        message: 'Two out of three people who want to become a nurse can\'t because of the bursary system. By introducing the loans, we will train more nurses and bring in fewer from overseas.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spnew69',
        message: 'Vicky from York thinks otherwise. She says she wouldn\'t have been able to train as a mental health nurse without the bursaries and wouldn\'t have taken on further debts.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spmin15',
        message: 'But two out of three Vicky\'s who turn up wanting to be nurses are sent away by our current system. Let us fund more British nurses and improve the NHS.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spnew70',
        message: 'You\'re asking nurses to fund themselves though. At a time where 9 out of 10 hospitals have a nurse shortage, won\'t your plans make it worse?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160120/debtext/160120-0001.htm#160120-0001.htm_spmin16',
        message: 'We\'ll see 10,000 more nurse degree places as a result of this policy.'
      }
    ]
  },

  {
    date: '13th January, 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spnew61',
        message: 'The PM announced a £140m fund to transform 100 housing estates. This isn\'t nearly enough money.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spmin11',
        message: 'We have doubled the housing budget; we will invest £8bn in housing; 700,000 homes have been built since I became PM.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spnew62',
        message: 'Every estate you wish to bulldoze will include residents. Will those people be guaranteed homes on the rebuilt estates?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spmin12',
        message: 'We want to improve estates that have held people back. We have done a great deal in the housing sector, with most of our initiatives being opposed by Labour.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spnew63',
        message: 'You didn\'t answer my question. Will you guarantee that all existing tenants will be rehoused in new council housing in their current communities?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spmin13',
        message: 'Work won\'t begin on the estates unless we get agreement from tenants. We are continually helping low income homeowners and communities to improve.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spnew64',
        message: 'Your manifesto says that everyone who works hard should be able to own a home. Will the so-called national living wage enable someone to buy a starter home?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spmin15',
        message: 'When I became PM, people needed £30k for a deposit. The schemes we\'ve introduced means that\'s down to £10k, so yes, I think this is affordable.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spnew66',
        message: 'Rather than building more affordable homes, aren\'t you simply re-branding more homes as affordable? Hasn\'t home ownership fallen since you became PM?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spmin16',
        message: 'Buying a home is a challenge. Help to Buy and Help to Save make it easier; both of which Labour opposed.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spnew69',
        message: 'If the current bill passes, ageing council tenants looking to downsize will have to sign a new tenancy agreement. If they stay, they face the bedroom tax. What is your advice?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm160113/debtext/160113-0001.htm#160113-0001.htm_spmin17',
        message: 'I would say that we are cutting social rents so she will pay less rent. Also pensioners don\'t pay the spare room subsidy.'
      }
    ]
  },

  {
    date: '6th January, 2016',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'After floods 2 years ago you said that there were "lessons to be learned and I will make sure they are learned." Were they?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'This time the military response was quicker and the Bellwin scheme was funded at 100%. I\'m sure there are more lessons to learn but we can do that because we have a strong economy.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'A £190m flood defence project in Leeds was cancelled in 2011 and continues to be scaled back. Will you guarantee that the full scheme will go ahead and protect Leeds from future flooding?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'The rivers flooded because it was the wettest December in 100 years. Flood defences have never been cancelled and funding continues to go up.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'What about the Leeds scheme? In 2014, Cumbria was denied funding for flood defences and the area has been flooded again. Was this a mistake?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'We are spending more on flood defence schemes.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Please answer my questions regarding Leeds and Cumbria. There have also been cuts in Yorkshire, which also suffered in December.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'We have increased and continue to increase spending on flood defences. We can do this because we have a strong economy.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'You still haven\'t answered on Leeds, Cumbria or Yorkshire schemes. Why was there insufficient pump capacity at the Foss barrier when this was alerted to the government in 2013?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'The Foss pump was about to be tendered for extra investment and that will now go ahead. We\'re also launching a flood insurance scheme.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'Will you support our calls for cross-party coordination approach to flooding? Should emergency services be given a statutory duty to deal with floods?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/unknown/7/',
        message: 'The emergency services have done an excellent job and have our backing. We will continue to increase the money we are spending on flood defences.'
      }
    ]
  },

  {
    date: '16th December, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spnew67',
        message: 'Can you guarantee there will be no crisis in the NHS this winter?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spmin9',
        message: 'Average hospital stays have dropped by half a day since I became PM and we have put £12bn in to the NHS.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spnew68',
        message: 'In 2011 you said you were in favour of transparency in the NHS. So why have you cancelled the publication of NHS data this winter?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spmin10',
        message: 'The data you\'re talking about were never published before we came to power. We have improved efficiencies in the NHS.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spnew69',
        message: 'There have been huge cuts in adult social care. Does the PM agree that cutting these services is a false economy?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spmin11',
        message: 'We are increasing the money that councils can spend on social care through the 2% council tax precept.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spnew70',
        message: 'The Health Foundation estimates there will be a £6bn shortfall in adult social care by 2020. How will the government meet that shortfall?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spmin12',
        message: 'The Local Government Association has praised further flexibility on the setting of council tax and this will go someway to councils raising the money they need.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spnew71',
        message: 'Adult social care falls within central government responsibilities. Meanwhile NHS Trusts predict a £2.2bn deficit this year.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spmin13',
        message: 'We are spending £19bn more than Labour on the NHS. Local councils decide how much to spend on adult social care and we\'re giving them the opportunity to raise more money.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spnew72',
        message: 'People are struggling to study second degrees to train as nurses. Will you and the chancellor reverse the cuts to the nurses bursary scheme?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151216/debtext/151216-0001.htm#151216-0001.htm_spmin14',
        message: 'Constraints on the system currently mean two out of three people who want to train as nurses can\'t. We\'re changing that and already have more doctors and nurses since I became PM.'
      },
    ]
  },

  {
    date: '9th December, 2015',

    tweets: [
      {
        politician: 'Angela Eagle',
        avatar: eagleAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'After the 2013-14 floods, only 15% of people received compensation within a year. Does the Chancellor agree this cannot happen again?'
      },
      {
        politician: 'George Osborne',
        avatar: osborneAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'We\'re creating a £50m fund for families and businesses affected, which will be administered by local authorities to avoid the issues last time.'
      },
      {
        politician: 'Angela Eagle',
        avatar: eagleAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'In 2014, the PM said that \'money is no object in this relief effort\'. Will the same apply this time?'
      },
      {
        politician: 'George Osborne',
        avatar: osborneAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'Absolutely. Up to £5k will be made available to families. The last Labour government spent £1.5bn on flood defences; we will be spending £2bn.'
      },
      {
        politician: 'Angela Eagle',
        avatar: eagleAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'The PM can\'t be with us today because he is on his seemingly endless European \'renegotiation tour\'. Can the Chancellor tell us how that is going?'
      },
      {
        politician: 'George Osborne',
        avatar: osborneAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'The PM is abroad fighting for a better deal for Britain, something that would never have happened under Labour.'
      },
      {
        politician: 'Angela Eagle',
        avatar: eagleAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'Many of your back benchers are unimpressed with how it is going. Is the PM aspiring to be the first post-EU PM?'
      },
      {
        politician: 'George Osborne',
        avatar: osborneAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'We\'re fighting to make sure Britain gets a good deal in Europe. In the end a referendum will decide.'
      },
      {
        politician: 'Angela Eagle',
        avatar: eagleAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'But surely uncertainty about the future of the UK in the EU is a destabalising factor, no?'
      },
      {
        politician: 'George Osborne',
        avatar: osborneAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'Since we announced the referendum, Britain has received the lion\'s share of investment into Europe, so I would disagree.'
      },
      {
        politician: 'Angela Eagle',
        avatar: eagleAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: '3 million UK jobs are linked to trade with the EU and half our exports go there. That\'s what you are putting at risk by flirting with Brexit.'
      },
      {
        politician: 'George Osborne',
        avatar: osborneAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'I thought the Labour party voted for the referendum? We have an economic plan that is delivering for Britain.'
      }
    ]
  },

  {
    date: '25th November, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: '55 Labour councils have committed to 100% green energy by 2050. Will the PM congratulate them and will the Tories follow?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'I commend all councils who want to promote green energy. We have made that easier in our country through feed-in tariffs.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'Do you agree with the Energy Secretary that Britain is likely to miss its target of getting 15% of our energy from renewables by 2020?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'We have a strong record and are able to go into Paris talks as a leader. We will spend $9bn over 5 years to help other countries.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'The gap between our 2020 target and our current share is the biggest in the EU due to the decisions your government has taken.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'Not correct. We have trebled the use of wind power and are also building the first new nuclear power station in the UK for decades.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'Thousands of jobs have been lost recently in the solar industry due to cuts in feed-in tariffs. Why do you want to throw all this away?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'The cost of manufacturing solar panels has plummeted so we need to support other aspects of solar power rather than feed-in tariffs.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'Can you explain why one third of women suffering from domestic abuse are being turned away by women\'s refuges in England?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'We have put more money into refuges and have protected rape crisis centres. We have a good record and also help women to prosecute.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'The closure of women\'s charity Eaves contravenes the government\'s signing of the 2012 Instanbul convention. When will you ratify this?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.parliament.uk/business/publications/hansard/commons/todays-commons-debates/read/',
        message: 'In the spending review today there will be more money for women\'s charities. We\'ve also done more on forced marriages and FGM.'
      }
    ]
  },

  {
    date: '18th November, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spnew60',
        message: 'What is the government\'s latest advice for people traveling to France in the wake of the Paris terrorist attacks?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spmin12',
        message: 'Full advice is on the Foreign Office website, but we should carry on as normal. One way to defeat terrorism is to show we will not be cowed.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spnew61',
        message: 'Will you join me in making it clear that the Paris attacks have nothing in common with the 2 million British Muslims in this country?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spmin13',
        message: 'I completely agree. Their actions are not a reflection of Islam. We need to deconstruct their associations between terrorism and Islam.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spnew62',
        message: 'Can the PM ensure all countries in the region are clamping down on sources of funding, arms and trade for ISIL?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spmin14',
        message: 'We should cut off supplies but the region is very unstable so this is challenging. We should also look at military action.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spnew63',
        message: 'Can you clarify where the necessary extra funding for the security services will come from?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spmin15',
        message: 'We will be increasing the number of security service personnel and safeguarding the counter-terrorism budget.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spnew64',
        message: 'That doesn\'t answer my question. What about the planned police cuts? Could these jeopardise our safety?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spmin16',
        message: 'The shadow Home Secretary has said that 10% cuts for the police is doable. Are you disagreeing with your colleague?'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spnew65',
        message: 'Morale in the police is so low that 1 in 3 are considering leaving. Will you protect policing budgets in next week\'s autumn statement?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151118/debtext/151118-0001.htm#151118-0001.htm_spmin17',
        message: 'Neighbourhood policing numbers are up 3,800 and we\'ve cut bureaucracy to also boost the numbers on the beat.'
      },
    ]
  },

  {
    date: '4th November, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spnew61',
        message: 'Last week I asked the PM 6 times if people would be worse off due to tax credit cuts. He\'s had a week to think about it, can he now answer?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spmin12',
        message: 'We suffered a defeat in the Lords on tax credits, so we\'ll come forward with new proposals in the autumn statement.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spnew62',
        message: 'Tory MP Andrew Percy said last week that changes to tax credits cannot go ahead. What is the PM\'s answer to his friend?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spmin13',
        message: 'I\'d give the same answer I\'m giving you. We will announce our plans in the autumn statement in three weeks\' time.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spnew65',
        message: 'An army veteran wrote to me saying he is worried whether his family will be able to get by. Is that how the government treats veterans?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spmin14',
        message: 'He will benefit from £11k personal allowance plus 30 hours childcare. He may not have a job if you ever got anywhere near power!'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spnew66',
        message: 'Can the PM guarantee there will be no winter crisis in the NHS this year?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spmin15',
        message: 'The NHS is benefiting from the £10bn we\'re putting in and I believe it has the resources it needs.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spnew69',
        message: 'The King\'s Fund doesn\'t think so. They say the NHS cannot continue to maintain standards and balance the books.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spmin16',
        message: 'The new CEO of the NHS said they needed £8bn, so we\'re giving them £10bn. The stats show care provision is rising.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spnew70',
        message: 'Since you took office waiting lists are up by a third and many hospitals run in deficit. Can you ensure the public they can rely on the NHS?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151104/debtext/151104-0001.htm#151104-0001.htm_spmin17',
        message: 'Since I became PM we have 16k more docs and nurses and the NHS has improved in many areas thanks to our strong economy.'
      },
    ]
  },

  {
    date: '28th October, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spnew67',
        message: 'Can you guarantee that nobody will be worse off next year as a result of cuts to working tax credits?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spmin10',
        message: 'We remain committed to a vision of high pay, low tax, lower welfare economy.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spnew68',
        message: 'Can you confirm that tax credit cuts will not make anyone worse off in April next year?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spmin11',
        message: 'We will set out new proposals in the autumn statement.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spnew69',
        message: 'I thought you were committed to not cutting tax credits. Will you cut them or not and will people be worse off?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spmin12',
        message: 'If we want a strong economy we need to reform welfare.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spnew71',
        message: 'You committed yourself to £12bn of welfare cuts but said tax credits would not be part of that. Can you answer my question?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spmin14',
        message: 'The answer will be in the autumn statement.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spnew72',
        message: 'Why did the former Chief Whip - now Justice Sec. - say before the election that tax credits won\'t be cut?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spmin15',
        message: 'If we want to get our deficit down we need to make savings in welfare.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spnew75',
        message: 'I ask for the SIXTH time today; can you give a guarantee to families worried about what will happen to their incomes next April?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151028/debtext/151028-0001.htm#151028-0001.htm_spmin16',
        message: 'Families on a basic wage in the public sector will be able to earn £11k before tax + 30hrs childcare a week under this government.'
      }
    ]
  },

  {
    date: '21st October, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spnew57',
        message: 'Yesterday a Con. back bencher said working families will suffer from proposed cuts to tax credits. Where was she wrong?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spmin13',
        message: 'Changes to tax credits are part of a package that includes a higher living wage and tax reductions'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spnew58',
        message: 'Cuts to tax credits would particularly hurt the self-employed and small business owners. Shouldn\'t we help these people not punish them?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spmin14',
        message: 'People on the lowest incomes will continue to receive the child tax credit at £2,730'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spnew59',
        message: 'The PM said on TV before the election that tax credits would not be affected. Why the change of heart?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spmin15',
        message: 'We said we\'d reduce welfare by £12bn and we\'re keeping that promise.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spnew60',
        message: 'Do you agree that the government\'s lack of intervention in the steel industry is having devestating effects on working people\'s lives?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spmin16',
        message: 'The steel industry is in a difficult situation globally due to supply & demand. We plan to take action to support steel in the UK'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spnew61',
        message: 'Thousands of steel jobs in the NE and midlands have been lost. We need serious action TODAY.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spmin17',
        message: 'We want a strong steel industry and will be taking action'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spnew64',
        message: 'The UN is investigating the UK for violations of disabled people\'s human rights. Will the PM cooperate with an open inquiry?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151021/debtext/151021-0001.htm#151021-0001.htm_spmin19',
        message: 'We\'ve helped many disabled people into work. I will look at UN report but often these are not all they are cracked up to be.'
      }
    ]
  },

  {
    date: '14th October, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spnew59',
        message: '2,000 people have emailed me in the last 3 days worried about tax credit cuts. Will people be worse off next year?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spmin9',
        message: 'We\'re introducing the national living wage of £9 per hour. We\'ll also raise the personal allowance to £11k. So many people will benefit.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spnew60',
        message: 'I can tell you that 3 million families will be worse off. Are you not taking away opportunities from children in low income families?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spmin10',
        message: 'Since I became PM there are 2 million more in work. All people benefit from a growing economy where wages are rising.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spnew61',
        message: 'Will you acknowledge that people in work often rely on tax credits? You\'ve given tax breaks to the wealthiest people, worsening inequality.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spmin11',
        message: 'Tax credits aren\'t working. We say it is better to let people earn more and take less from them in tax. Your figures are wrong.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spnew62',
        message: 'Does the PM really believe that £450,000 is an affordable price for a new home?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spmin12',
        message: 'We want £450k to be the upper starter limit in London and want starter homes from £150k. We\'ve also introduced the Help to Buy scheme.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spnew63',
        message: 'We are not building enough houses though. Local authorities are struggling to access funding for council housing.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spmin13',
        message: 'We\'ve built more council homes in the last 5 years than Labour built in 13. We will not borrow money to build houses.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spnew66',
        message: 'Data on secondary breast cancer is not being collected efficiently in hospitals. Can you follow up on a promise made in 2010 on improving this?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: 'http://www.publications.parliament.uk/pa/cm201516/cmhansrd/cm151014/debtext/151014-0001.htm#151014-0001.htm_spmin14',
        message: 'I agree. I too met with the campaigners he mentions and relayed our discussions to the Health Secretary. I will write you a full update.'
      },
    ]
  }

];

}]);