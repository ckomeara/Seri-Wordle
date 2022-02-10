import { CONFIG } from './config'

export const VALIDGUESSES = [
'caait',
'caanj',
'caatc',
'cacni',
'cmaam',
'coftj',
'coiiz',
'comot',
'conee',
'coopa',
'coote',
'copas',
'copni',
'coton',
'coziz',
'cpatj',
'cpooj',
'cpoot',
'csaai',
'csipx',
'eenim',
'haaca',
'haaco',
'haaho',
'haalp',
'haapa',
'haapx',
'haasj',
'haaxt',
'hacat',
'haipj',
'haixa',
'hamat',
'hamoc',
'hamoj',
'hanaj',
'hapaj',
'hapoj',
'hapxa',
'hasac',
'hasaj',
'hasla',
'hasoj',
'hasot',
'hatip',
'hatni',
'hatoj',
'haxlc',
'haxoj',
'hazni',
'heecl',
'heexz',
'hepem',
'hesen',
'hexez',
'hexot',
'hohra',
'hooro',
'hoova',
'iimox',
'iiyas',
'iizax',
'iizoj',
'jaaro',
'masni',
'matar',
'matcz',
'maxaa',
'miist',
'mocni',
'mojet',
'moora',
'motcz',
'najoo',
'nooni',
'noosi',
'paaij',
'paaza',
'pajii',
'pamtj',
'poosj',
'potaa',
'quiit',
'quiiz',
'quizi',
'raama',
'saacj',
'saaco',
'satim',
'satoj',
'seeex',
'seene',
'spitj',
'stacj',
'tamax',
'teetx',
'tiina',
'tincl',
'tison',
'toaaz',
'toerc',
'tohni',
'tonom',
'tosni',
'xaasj',
'xajii',
'xapij',
'xapoo',
'xazoj',
'xeele',
'xeete',
'xiime',
'xlolo',
'xnaai',
'xomee',
'xooml',
'xpaaz',
'xpist',
'xtiip',
'yaiij',
'zaaij',
'zaaxa',
'zamij',
'zazan',
'zazjc',
'zeeme',
'zeemj',
'zoozj',
'caaca',
'caafc',
'caajc',
'caamn',
'caaol',
'caaom',
'caapj',
'caapo',
'caati',
'caatj',
'caato',
'caazi',
'caazj',
'cacsx',
'cafaa',
'cafzx',
'cahaa',
'camoz',
'cancl',
'canoj',
'capca',
'capxa',
'capzx',
'casim',
'catax',
'catla',
'catol',
'catoo',
'catxo',
'caxaa',
'caxax',
'cazoj',
'ccaao',
'ccaat',
'ccacj',
'ccafz',
'ccaii',
'ccazx',
'ccojp',
'ccooi',
'ccooo',
'ccoos',
'ccotp',
'ccotz',
'ccozl',
'cficj',
'chanl',
'chapx',
'chast',
'cheel',
'cheme',
'cjizi',
'cmaai',
'cmatj',
'cmeet',
'cmiha',
'cnaft',
'cneec',
'cnexe',
'cnifz',
'coaaf',
'coaai',
'coaap',
'cocaa',
'coiij',
'cojoz',
'cooca',
'coocj',
'coocp',
'cooha',
'coomx',
'coonl',
'coosi',
'coosj',
'coosx',
'coota',
'coote',
'cootp',
'coots',
'cooxi',
'cooxp',
'cooza',
'coozt',
'cosii',
'coyai',
'cpaps',
'cpapx',
'cpasi',
'cpatj',
'cpene',
'cpete',
'cquii',
'cquim',
'csacj',
'csaii',
'csanj',
'csoop',
'ctaai',
'ctiin',
'ctins',
'ctopl',
'cxapz',
'cxopt',
'cyacj',
'cyaxa',
'cyaxi',
'czatx',
'czexe',
'cziim',
'czxoc',
'mocom',
'ooque',
'quica',
'quifj',
'quiho',
'quiht',
'quiih',
'quiim',
'quiix',
'quilp',
'quimt',
'quimx',
'quina',
'quipi',
'quipt',
'quisj',
'quiso',
'quita',
'quiti',
'quitj',
'quitp',
'quiya',
'quizi',
'quizp',
'quizt',
'ahoot',
'eenim',
'iitxi',
'ijcoa',
'imoon',
'ipeen',
'ipeez',
'isman',
'izaah',
'izacz',
'acaac',
'acaam',
'amaac',
'asaac',
'azaac',
'azmii',
'caapa',
'caapx,'
'capii',
'casii',
'cocom',
'haahs',
'hapee',
'icaaz',
'ihaso',
'iique',
'iista',
'imocl',
'imonj',
'ipocj',
'itaap',
'iteel',
'iteen',
'itiic',
'itoaa',
'ixaai',
'iztim',
'quihs',
'yacax',
'yaoto',
'yatoj',
'yazim',
'yeepx',
'yeesj',
'yeezj',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
