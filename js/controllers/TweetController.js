/*global app:true */
app.controller('TweetController', ['$scope', function($scope) {

var corbynAv = 'img/corbyn-av.png';
var cameronAv = 'img/cameron-av.png';

$scope.debateSelector = {date: 'hideall'};

$scope.debates = [

  { date: 'Select a date' },

  {
    date: '25th November, 2015',

    tweets: [
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: '',
        message: '55 Labour councils have committed to 100% green energy by 2050. Will the PM congratulate them and will the Tories follow?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: '',
        message: 'I commend all councils who want to promote green energy. We have made that easier in our country through feed-in tariffs.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: '',
        message: 'Do you agree with the Energy Secretary that Britain is likely to miss its target of getting 15% of our energy from renewables by 2020?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: '',
        message: 'We have a strong record and are able to go into Paris talks as a leader. We will spend $9bn over 5 years to help other countries.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: '',
        message: 'The gap between our 2020 target and our current share is the biggest in the EU due to the decisions your government has taken.'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: '',
        message: 'Not correct. We have trebled the use of wind power and are also building the first new nuclear power station in the UK for decades.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: '',
        message: 'Thousands of jobs have been lost recently in the solar industry due to cuts in feed-in tariffs. Why do you want to throw all this away?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: '',
        message: 'The cost of manufacturing solar panels has plummeted so we need to support other aspects of solar power rather than feed-in tariffs.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: '',
        message: 'Can you explain why one third of women suffering from domestic abuse are being turned away by women\'s refuges in England?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: '',
        message: 'We have put more money into refuges and have protected rape crisis centres. We have a good record and also help women to prosecute.'
      },
      {
        politician: 'Jeremy Corbyn',
        avatar: corbynAv,
        side: 'left',
        source: '',
        message: 'The closure of women\'s charity Eaves contravenes the government\'s signing of the 2012 Instanbul convention. When will you ratify this?'
      },
      {
        politician: 'David Cameron',
        avatar: cameronAv,
        side: 'right',
        source: '',
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