import{_ as a,j as p,k as e,S as l}from"./chunks/framework.2ff57350.js";const s=JSON.parse('{"title":"期货","description":"","frontmatter":{},"headers":[],"relativePath":"cryptocurrency/期货.md","filePath":"cryptocurrency/期货.md"}'),t={name:"cryptocurrency/期货.md"},i=[l('<h1 id="期货" tabindex="-1">期货 <a class="header-anchor" href="#期货" aria-label="Permalink to &quot;期货&quot;">​</a></h1><h2 id="期货是什么" tabindex="-1">期货是什么？ <a class="header-anchor" href="#期货是什么" aria-label="Permalink to &quot;期货是什么？&quot;">​</a></h2><p>现货交易就是一手交钱，一手交货。</p><p>现货交易对于绝大部分人来说肯定都不陌生，扫码支付，这些都是现货交易。</p><p>与现货交易不同的，就是期货交易。期就是未来的意思，期货顾名思义就是未来的交易。</p><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><p>假设咱是一个石油大亨，想买10000个油轮装的原油来炼油，于是找到“大鳄”。这么大的买卖现货交易是不可能的，因为对方也要加班加点生产个把月才能凑齐货，因此，双方约定两年后再交货，交货价按交割日价格结算，这就是双方签订的一份远期合约。</p><h2 id="市场中常见的期货" tabindex="-1">市场中常见的期货？ <a class="header-anchor" href="#市场中常见的期货" aria-label="Permalink to &quot;市场中常见的期货？&quot;">​</a></h2><p>在大宗商品市场，比如原油，铁矿石，农产品啥的，一对一签订远期合约是很常见的，但是仅限于大买家和大卖家。为了让期货交易标准化，比如大家都要买原油，于是制定了一套标准的期货合约，比如以1桶为报价，每份合约最小单位1000桶为一个交易单位，每月月底交割一次，这样就形成了在交易所可以交易的标准期货合约。一份合约1000桶这个1000就是合约乘数（Multiplier），即每买1手就是1x1000桶。</p><h2 id="交割是什么" tabindex="-1">交割是什么？ <a class="header-anchor" href="#交割是什么" aria-label="Permalink to &quot;交割是什么？&quot;">​</a></h2><p>假设某3个月后交割的原油期货合约，和现货交易一样，有成交就必须有买卖双方：买家花$80买了一手，卖家就以$80的价格卖掉一手，那么3个月后买家就按交割价补齐现金并获得1000桶原油，卖家则需要支付1000桶原油，这就是交割。</p><h2 id="开仓价格" tabindex="-1">开仓价格 <a class="header-anchor" href="#开仓价格" aria-label="Permalink to &quot;开仓价格&quot;">​</a></h2><p>只不过在期货交易所买卖的时候，买家以$80买入一手，并不需要支付$80,000，而是按比例支付一个保证金，比如10%，即买入一手原油只需要$8,000，交割的时候再按交割价补足余额。对卖家来说，以$80的价格卖出一手也需要支付保证金$8,000，保证金就是交易所为防止双方违约强制冻结的金额。$80即买卖双方成交的价格，也是开仓价格。</p><p>因此，期货交易每成交1手，买卖双方会持有仓位（Position），买方持有多头仓位，卖方持有空头仓位，仓位的数量是1，仓位价值就是$80,000，按照成交价的10%缴纳保证金，则该仓位需要冻结保证金$8,000。注意仓位的保证金是冻结而不是支付给交易所的，交易所收取的手续费另算（通常在万0.1～万5）。</p><h2 id="计算方式" tabindex="-1">计算方式 <a class="header-anchor" href="#计算方式" aria-label="Permalink to &quot;计算方式&quot;">​</a></h2><p>期货交易和现货交易一样，价格也是时刻在变化的。如果原油期货的价格上涨10%，从$80涨到了$88，那么卖方就亏钱了，因为1桶原油的价格可以按$88卖出但卖方却是早期以$80卖出的。我们来算算他亏了多少钱：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">卖方盈亏 = (开仓价 - 最新价) x 仓位数量 x 合约乘数 = (80 - 88) x 1 x 1000 = -8000</span></span></code></pre></div><p>即卖方冻结的保证金已经全部亏光。此刻卖方要么补充保证金，要么被交易所强行以$88的价格平仓，平仓后卖方将损失所有保证金。</p><p>我们再计算买方的盈亏：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">买方盈亏 = (最新价 - 开仓价) x 仓位数量 x 合约乘数 = (88 - 80) x 1 x 1000 = 8000</span></span></code></pre></div><p>可见，在不考虑手续费的情况下，买卖双方的总盈亏是0，因此，期货交易就是零和博弈，任何一方赚的钱都来自于另一方赔的钱。</p><p>在期货交易中，仓位的概念很重要。一开始的时候，大家都没有仓位，一旦有买卖成交，则买卖双方各自持有多仓和空仓。如果交易员小明已经持有多仓1手，他又卖出1手开了一个空仓，那么这两个仓位实际上可以完全抵消，所以期货市场的买卖分为4种情况：</p><ol><li>买入开多：没有持仓时，买入后持有多仓；</li><li>卖出开空：没有持仓时，卖出后持有空仓；</li><li>卖出平多：持有多仓时，卖出后平掉多仓；</li><li>买入平空：持有空仓时，买入后平掉空仓。</li></ol><p>一个交易员也可以以不同的价格成交若干仓位，比如交易员小明以$80价格买入2手，又以$85的价格买入3手，累计5手多仓，则小明的开仓均价为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">开仓均价 = 各仓位开仓价值 / 总仓位数量 = (80 x 2 + 85 x 3) / (2 + 3) = 83</span></span></code></pre></div><p>计算开仓均价不需要代入乘数，因为(80 x 2 x 1000 + 85 x 3 x 1000) / ((2 + 3) x 1000)结果是一样的。</p><p>交易员的盈亏实际上就看最新价格相对于开仓均价的涨跌幅。</p><p>如果小明以$80价格买入1手开多，当价格涨到$88时，小明浮盈：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(88 - 80) x 1 x 1000 = 8000</span></span></code></pre></div><p>小明在$80开仓时需要冻结保证金$8000，假设小明的本金就是$8,000，那么小明在价格上涨10%的时候，盈利100%，因为10倍杠杆放大了小明的盈利。</p><p>反过来，如果价格下跌5%到$76，我们计算小明的浮亏：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(76 - 80) x 1 x 1000 = 4000</span></span></code></pre></div><p>小明一共有$8000本金，已浮亏50%，即10倍杠杆将价格下跌5%放大为50%的亏损。</p><p>可见，杠杆既能放大盈利，也能放大亏损。</p><p>我们还需要特别注意杠杆率。交易所规定的10%保证金实际上是最高10倍杠杆，但交易员的实际杠杆率并不一定就是10倍。</p><p>还是以小明举例，假设小明的本金是$32,000，但他在$80的价格只开了1手多仓，那么小明在价格上涨10%的时候，实际盈利$8,000，相对于本金来说盈利8000/32000=25%，即小明的实际杠杆率是2.5倍，价格上涨10%会让小明的盈利放大2.5倍，而价格下跌40%会让小明的本金亏光。</p><p>在交易所交易的时候，假设小明的本金是$32,000，那么一开始小明在交易所的可用资金就是$32,000。当小明在$80的价格开了1手多仓后，交易所将冻结小明$8,000资金，因此，小明的可用资金变成$24,000。</p><p>如果价格下跌至$76，则小明浮亏$4,000，交易所将再冻结小明$4,000的资金以补足浮亏，因此，小明一共会被冻结$12,000，可用资金变为$20,000。如果价格下跌至$48，则小明被交易所强制平仓，亏光全部本金$32,000。</p><p>只有当小明的本金为$80,000时，要亏光全部本金，价格需要跌至0，因此，小明如果本金为$80,000，他在$80的价格持有1手多仓时，实际杠杆率为1，即1倍杠杆。1倍杠杆开多时，理论上没有爆仓风险，因为价格跌至0也仅仅亏掉全部本金。但是1倍杠杆开空是有爆仓风险的，因为价格上涨没有上限，上涨100%就会导致1倍杠杆的空仓爆仓，上涨200%就会导致0.5 倍杠杆的空仓爆仓。可见，做空的风险比做多要大。</p><h2 id="期货是赌博" tabindex="-1">期货是赌博？ <a class="header-anchor" href="#期货是赌博" aria-label="Permalink to &quot;期货是赌博？&quot;">​</a></h2><p>在商品期货中，真正买入并持有到交割的买家，以及卖出并持有到交割的卖家其实比例不大，大部分投机者做多或做空都是为了赚取价格波动的差价，本质上和赌大小的赌徒没啥区别。</p><p>既然赌博是零和游戏，如果没有投机者参与期货市场行不行呢？答案是不行。</p><p>首先，投机者的频繁交易提供了流动性，流动性在金融市场永远是最重要的。</p><p>其次，真正的买家和卖家，买入和卖出期货本质上是锁定了价格，即规避了价格波动的风险。如果小明以$80的价格买入了1手原油，到交割日，假设原油价格上涨到$100，则每买入1桶原油小明需要多花$20，但同时期货市场上每桶原油小明正好赚了$20，抵消了价格上涨需要支付的额外成本。</p><p>反过来，如果交割日原油价格下跌到$60，则每买入1桶原油小明可少花$20，但同时期货市场上每桶原油小明正好亏损$20，亏损的部分正好是价格下跌少花的成本。</p><p>对于卖家也是类似的，则需要在合适的价格持有空头仓位，相当于锁定了卖价。</p><p>可见，期货市场，使得贸易双方能提前锁定价格波动的风险。但是价格波动的风险并不会消失，风险只是转移给了场内的投机者。没有大量的投机者参与期货交易，风险就无法转移。</p><p>期货市场使得贸易双方可以将价格波动的风险转移给投机者。对贸易双方来说，期货市场可以实现风险对冲。</p><p>期货的另一个特点是真实贸易方占比其实不大，投机者的持仓量和交易额可以远超真实贸易额，理论上可无限容纳多空双方的资金，这也是为什么期货被称为一种衍生品的原因。</p><h2 id="金融期货" tabindex="-1">金融期货 <a class="header-anchor" href="#金融期货" aria-label="Permalink to &quot;金融期货&quot;">​</a></h2><p>如果期货挂钩的是商品价格，例如原油，那么就是商品期货。期货还可以挂钩股票指数等金融产品，这就是金融期货。</p><p>例如沪深300指数是跟踪300只股票的指数，而沪深300指数期货（代码IF）就是以沪深300指数价格为基础的金融期货。</p><p>金融期货和商品期货还有所不同。商品期货到期交割需要卖方交割实物，而金融期货一般都是现金交割，即多空双方的盈亏直接以现金支付给对方。</p><p>我们以沪深300指数期货为例，每买一手IF，价值是每点300元。假设小明以¥4000的价格买入一手，那么买入价值为4000x300=120万，需冻结保证金12万。如果持有到交割日且价格上涨到¥5000，那么小明一手可赚(5000-4000)x300=30万，反之，如果价格下跌到¥3000，那么小明一手亏损30万。</p><p>对IF来说，该期货产品仅需要跟踪沪深300指数的价格，买卖双方均不需要持有任何现货，交割时也不涉及任何股票交割，完全是现金形式的对赌。</p><p>如果说商品期货可以让买卖双方锁定价格波动的风险，金融期货则主要用来对冲现货的风险。我们举个例子：小明花费120万买入了300ETF，但是他觉得大盘继续下跌的可能性很大，于是小明可以同时做空一手IF，如果现货继续下跌，小明在期货市场的盈利可以对冲现货的亏损。当然，不持有现货仅持有期货仓位的交易员就是纯粹的赌博。</p><p>实际上，对于期货产品来说，很多时候，只需要一个价格不断变化的标的物，就可以有对应的期货。在无监管的币圈，有跟踪BTC的期货，也有跟踪ETH的期货，还有跟踪某个山寨币的期货。要特别注意那些现货被高度控盘的期货，因为庄家可以在期货市场先开多，再拉盘，等现货高位时，在期货市场平多后再反手开空，再在现货市场砸盘，从而达到双倍收割的效果。</p><h2 id="杠杆" tabindex="-1">杠杆 <a class="header-anchor" href="#杠杆" aria-label="Permalink to &quot;杠杆&quot;">​</a></h2><p>对所有衍生品交易来说，杠杆既可以放大盈利，也可以放大亏损。由于杠杆效应，尤其是在高杠杆的情况下，非常容易将亏损放大至全部本金。很多韭菜误以为杠杆即使亏了，由于赚得快回本也容易，实际上我们可以简单计算一下：</p><p>假设本金10万，10倍杠杆亏5%，总亏损高达50%，就只剩5万本金了。</p><p>如果想要回本，需要盈利100%，这意味着10倍杠杆要盈利10%，中间还不能有大波动。</p><p>反复几次，本金基本就亏光了。</p><p>场内加杠杆，容易亏光本金。还有一种隐形的场外杠杆，不但能亏光本金，还能直接将负债大幅增加。</p><p>场外杠杆包括借钱、信用卡套现、抵押房产、小额贷款等一切场外借贷。一旦爆仓，场外杠杆将直接亏掉未来的收入甚至是未来一辈子的收入！</p><p>举例：小明只有10万本金，他通过小额贷款借款40万，相当于场外5倍杠杆。小明以50万资金在场内开10倍杠杆，实际杠杆率高达5 x 10 = 50，因此价格向不利方向波动2%小明即损失10万自有本金，波动10%小明爆仓并负债40万。除了下海干活小明已别无他法。</p><p>永远不要在场外加杠杆！永远不要在场外加杠杆！永远不要在场外加杠杆！</p><p>最后，我们总结期货的特点：</p><ul><li>多空双方对赌，高风险的零和博弈；</li><li>保证金制度可让杠杆放大盈亏；</li><li>可以对冲现货价格的波动风险。</li></ul>',68)];const n=a(t,[["render",function(a,l,s,t,n,o){return p(),e("div",null,i)}]]);export{s as __pageData,n as default};
