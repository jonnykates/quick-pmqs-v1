/*global app:true */
app.controller('TweetController', ['$scope', function($scope) {

var corbynAv = 'img/corbyn-av.png';
var cameronAv = 'img/cameron-av.png';

$scope.debates = [

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
        message: 'I thought you were commited to not cutting tax credits. Will you cut them or not and will people be worse off?'
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
        message: 'You commited yourself to £12bn of welfare cuts but said tax credits would not be part of that. Can you answer my question?'
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
  }

];

}]);