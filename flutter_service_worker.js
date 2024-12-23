'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5df03f95b4ff4f4b5dabe53a5a1e15d7",
".git/config": "f54527343bb61dd89fb8f9db308228a1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa821255c7509f0a322f804069e3794c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e61baa42606ea25b92d62e8d0e5c939",
".git/logs/refs/heads/master": "acc073fb34c5e1058afce693bd605689",
".git/logs/refs/remotes/origin/master": "4dc8614d4eeff95ce0432cda86f8b552",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/55dc3cad4c458fb4942ef4e2e59705433b1971": "f4646744d2debd0d254a2fc49ee3eaad",
".git/objects/10/3e5a3bce50ea4cdeacd85ee796a46afadfc208": "ae4805639ee3c75d8b953896c6d6ef25",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/11/070022b542db40f49550ae72c26da571b894c1": "a169505f9f2898af4560a0d5cd079606",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/17/b79a7421091726582772a04a1849bf20cce15a": "4e6fe0236b525aeca1c53dd1dd5d0e66",
".git/objects/1c/17c9e6768022de39830b8ed9a0dbc71ec31382": "3e28996b7199de0a6ceae873005a4a13",
".git/objects/1c/7d5a1305ad57cb03ed094e0ed3e5910aa49a7d": "ada3ef993bc86737e5685d88d17c19ca",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/2e/fe206e025d3be4de0c689ff477473281b16f74": "86a8ffcbe82522373f0a5f4de723c1c3",
".git/objects/30/448c7a017e7394e7a45f9678df754a82a49948": "01586f9be4b3067d0b9419018872b7e0",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3d/15082bfd5a872522c683d76cb9663ecf2ca577": "344e35213f93390fa6b531c4981f1526",
".git/objects/3f/9745e03846496790169a292ccbe643a03ec04c": "01d87ce7332465718470251fa095dbb2",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/ac3b51b4ece83f1d52c1c66831bd9a7e941598": "9a0ccab83d35061b1986cedc1ab3472f",
".git/objects/41/3e9204d976556488ea81d07528c6ee9553ec30": "423450e5a3edbbf5b63b3aebbf0eb1c2",
".git/objects/43/074eeecc73d68f49dd9b40723f8889943ee6fc": "f983587bb48c8330dcb07af552e993cf",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/19921465531713bd1b521c902d1bf3814fe5ee": "799fa3517c468ce8f5784b6afc0b55e8",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/4f/3f9a34181d2ea80c9d8699600bd723a5a83ca5": "232bdc55529ab45b1fb1488613353a96",
".git/objects/50/266efeb34a6e75e7fde47ca4abb40def571611": "59c6543bfee5362c8d86b038ae334523",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/65/4a78d1ea5bc6f250b4019a2ce550ef93aefb8d": "423a723356cbe06402c586aa7c0d0d83",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/6f/1056ee73d81edf92ca87181f77d43194330d90": "d36810b5d7a0b70da29f76b2e54c6899",
".git/objects/6f/e26de7be5a536886818fd2639a37059401bd61": "9f11630ef13a16de4c79b79b2d5284b4",
".git/objects/70/18d3a0c30222a3040329da3c0e3cf585157d7d": "95cddc507034b2c467c784dc662c3dce",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/76/3e0a279af7cb7bf2b0fd33500b29d1e352379f": "07bc56a8c3d839c5849fff810e34f02c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/90278644d1bf235a84c2d815236d42eb3a068d": "fa10ed352fc403000ea78b8f6bdeafc2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/aa/897254e0152bc45778d55535c6be0443b6eadc": "39d2b020ac79c2abe582ef0692f00084",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/69006177c966651d95e06bcf986cc5aa24c2c2": "371926cfbfa1bae9c61701f1f3247747",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/fc84f5b04cdace3a5e969c91f81ce4499ab5b1": "061c4d2dcd3365716e7804334bb7fd6d",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/ca/7656737d15410571f6720c5b4d5c04c1263285": "4da59c3ddfa0def91e0a682bbda7c143",
".git/objects/ca/a302f35ded7a18110feb71d44e489a72b5fb0e": "086c564c5b8ba837333b0e7ae3073299",
".git/objects/cb/a89a67da142e4328867ae2805c432ef8c16aaf": "fa74d5ba09367eb39363cf460a1b9b59",
".git/objects/cd/ffa6a325165e573320699bfdfcb52b8a64cd36": "ca828f762b123f207d5bf3a8a618c130",
".git/objects/cf/187743fbb93dbf03e9e3a2504156f9bf72b476": "453a5a853f6d4fe05ddf770255d10e67",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/490f6304a0ec69a17729f444116f981eb4005d": "207e9b70b49f490c3c602ff50d2ec0ff",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/da/1a650e53c15e6c6f8f3772e5eb232befc9871c": "16231d468e257ca5448725542e932181",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/e1/9c642ec3498a4aabfa67acd5a695bc8f0fca21": "0c8ddde436ddfdde540d92d775d1f678",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/e3/76e76ab7901f837f08b48d73aaabbc6888de4c": "236202af42c7be9496c5d110bff42151",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/9e67dde2c04e8c288d8f09a95399864b9c98cc": "52064b06777f1e6c9f430cf0f5e75397",
".git/objects/e3/ebc03aad5aa1a1be9cc70c69482aa0c3746768": "0953f4d9f4207d3db4118069b933d984",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/e9/67f8247c65439074624ccac24009d2ccc52e7c": "d1fb013922d5956c25101591b0bb15e5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/90daa04ee8f54ecfb69bacbc1ca3fff523a426": "1c41e81794e04f1d82661035c3ea7ac6",
".git/objects/f0/2a6e81db115063848c1c7f7f62630e6adb5b9d": "a92bb35c14d9ee819f8c0deb5578c9df",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b96b6dd75eb823f438241294245cae493769cf": "cfab9b6bc5378ba6b66a4561d26bc4d1",
".git/objects/f2/f00fe23fea134b981fc03422d4a756c407b7df": "22a5ddb0e5b4af478d16fe9831f031e8",
".git/objects/f6/15268b701886056ad2838aa91299b5d0348d87": "98391f3c3def8673715d9a0eb5b809dc",
".git/objects/f6/df715b2d996b818c141fc1c3f7902adbc7d100": "cc0d174f80ceaccd86cefcf5e1805a7d",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/refs/heads/master": "cc667b1f8ebd3c8b141824035f5bbea7",
".git/refs/remotes/origin/master": "cc667b1f8ebd3c8b141824035f5bbea7",
"assets/AssetManifest.bin": "fbbdb3269712ff3c9081b1ee93a9cf12",
"assets/AssetManifest.bin.json": "cab7a22027d2af5bf3382e96fb164268",
"assets/AssetManifest.json": "fc2371039e53f8fd69c64fbf35fc1b4d",
"assets/assets/icons/appicon_transparent.png": "9f179a654bc05c251a509db7ef476729",
"assets/assets/icons/app_icon.png": "657efe2b41297fcd0859251ae30ce13b",
"assets/assets/icons/book.png": "30fb34036236ffa050d62df9461f993f",
"assets/assets/icons/dashboard.png": "61c3c34ccbf94c208e48b03af7ae9ce8",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/logout.png": "9b3063a8887d802d74766c605ff321e9",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/notification.png": "a6685f91e4a045d181a12c167450506f",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/icons/pdf.png": "b4d2b4d7a72ede2863d7d7dae1dc63d7",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/people.png": "e0cbb66affac6a1483940f9b4bd1d268",
"assets/assets/icons/reading.png": "f59d47a0564b7ee906c9d3d75487b6f6",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/student-svgrepo-com.svg": "2c35362bffb323b211aee2453179c3cb",
"assets/assets/icons/subscription.png": "8e374bd3706ba6d6bbae35b91f21b6c0",
"assets/assets/icons/support.png": "7f888d2ca2474c447d0bb8b667c3a66a",
"assets/assets/icons/trade.png": "e0d4c11b69f76ef5e4a5affe744c95b8",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/images/49663935_9273256.svg": "87009c9284387c5a34b532925c169817",
"assets/assets/images/doctor.png": "422a5bb41cb9c879584fd97d89fb0349",
"assets/assets/images/doctor2.png": "9753b06259854fcf32a16aaf6a748e23",
"assets/assets/images/fcps.png": "e3b0142dd197bfd16467310a80c5b7ba",
"assets/assets/images/forget.png": "c872f3d7855979fc732364f0c3af60f3",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/man.png": "777a978fc77f5b57c9d0cbd1c2fc7ad9",
"assets/assets/images/MRCP-AD2-ca.jpg": "9c367c04a6c4dea2bcb424f535f1a948",
"assets/assets/images/original_man.png": "e13eb1284b29cf99bf8fb1c3241ef848",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/reset.png": "1d97c5a1b4e9a270fad353797aa17656",
"assets/assets/images/sub.png": "35565378e2aae5abaef3d3894d60ecc8",
"assets/assets/images/verification.png": "dc5b97787426f04cb13158ca9deeed2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8f4f9ee35c005c11666110f38bffe0b7",
"assets/NOTICES": "1be05e51de616d6053a8819e39877ca2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "be6d42ff010d113224d31a63d1a7bf6c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "406f80d74e68bb4787baa902f213d05e",
"/": "406f80d74e68bb4787baa902f213d05e",
"main.dart.js": "71059efd2a0ffb65e8ff5ac0ddd1bb0e",
"manifest.json": "822f8dfe5db8358a1da57dbc41bcefd2",
"version.json": "3d1fb91942817d1e76f9149c22c6dc03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
