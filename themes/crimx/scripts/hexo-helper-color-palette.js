/* global hexo */

hexo.extend.helper.register('color_brightness', getBrightness)

var flatColor = [
  { light: '#5065a0', dark: '#394c82' },
  { light: '#5e4433', dark: '#4f3a2b' },
  { light: '#a38570', dark: '#8e725e' },
  { light: '#335e40', dark: '#2c4f34' },
  { light: '#95a4a5', dark: '#7e8b8c' },
  { light: '#2ecc70', dark: '#26ad5e' },
  { light: '#a6c63b', dark: '#8eaf21' },
  { light: '#9a58b5', dark: '#8d43ad' },
  { light: '#773029', dark: '#662520' },
  { light: '#1abc9c', dark: '#16a085' },
  { light: '#e57d22', dark: '#d35400' },
  { light: '#f47cc4', dark: '#d35b9d' },
  { light: '#5e335e', dark: '#4f2a4f' },
  { light: '#745ec4', dark: '#5b47a3' },
  { light: '#e84d3c', dark: '#bf382a' },
  { light: '#3498db', dark: '#2880ba' },
  { light: '#3a7082', dark: '#346272' },
  { light: '#ef7079', dark: '#d85458' },
  { light: '#ffcc02', dark: '#ffaa00' }
]
hexo.extend.helper.register('flat_color_templatte', function () {
  return flatColor.concat()
})

var randomColor = ['#E0E4CC', '#D6DAC2', '#7BB0A6', '#92F22A', '#64DDBB', '#7CEECE', '#8F6F40', '#6F532A', '#523D1F', '#A0B58D', '#A19C69', '#FD5B03', '#63393E', '#3C3741', '#8C7E51', '#54573A', '#F04903', '#FF7416', '#F29B34', '#D33257', '#3D8EB9', '#71BA51', '#FEC606', '#E75926', '#EB6361', '#EBBD63', '#6C8784', '#45362E', '#87766C', '#25373D', '#CF000F', '#E3000E', '#E6DCDB', '#D2D7D3', '#E7E7E7', '#282830', '#BADA55', '#1DABB8', '#C82647', '#FF6766', '#60646D', '#FFFFF7', '#83D6DE', '#97CE68', '#EB9532', '#EE543A', '#D8335B', '#953163', '#422E39', '#FACA9B', '#FDD09F', '#F3D89F', '#E7DF86', '#C0BA78', '#AAB69B', '#9E906E', '#9684A3', '#8870FF', '#888888', '#897FBA', '#8870FF', '#2C82C9', '#2CC990', '#EEE657', '#FCB941', '#FC6042', '#3E4651', '#F1654C', '#00B5B5', '#D4D4D4', '#D98B3A', '#D6523C', '#BB3658', '#7E3661', '#43353D', '#E3C39D', '#E26E67', '#E01931', '#8A2D3C', '#344146', '#60646D', '#FFFFF7', '#83D6DE', '#97CE68', '#EB9532', '#EE543A', '#D8335B', '#953163', '#422E39', '#FACA9B', '#FDD09F', '#F3D89F', '#E7DF86', '#C0BA78', '#AAB69B', '#9E906E', '#9684A3', '#8870FF', '#888888', '#897FBA', '#8870FF', '#2C82C9', '#2CC990', '#EEE657', '#FCB941', '#FC6042', '#3E4651', '#F1654C', '#00B5B5', '#D4D4D4', '#D98B3A', '#D6523C', '#BB3658', '#7E3661', '#43353D', '#E3C39D', '#E26E67', '#E01931', '#8A2D3C', '#344146', '#EFE0B1', '#DBCB8E', '#9E9D9B', '#847858', '#9E8E5A', '#1D2247', '#B0DACC', '#D6CA8B', '#E22211', '#249991', '#E76B6B', '#FEFEFE', '#42729B', '#F6F7F2', '#E0E4CC', '#D6DAC2', '#7BB0A6', '#92F22A', '#64DDBB', '#7CEECE', '#8F6F40', '#6F532A', '#523D1F', '#A0B58D', '#A19C69', '#FD5B03', '#63393E', '#3C3741', '#8C7E51', '#54573A', '#F04903', '#FF7416', '#F29B34', '#D33257', '#3D8EB9', '#71BA51', '#FEC606', '#E75926', '#EB6361', '#EBBD63', '#EFE0B1', '#DBCB8E', '#9E9D9B', '#847858', '#9E8E5A', '#1D2247', '#B0DACC', '#D6CA8B', '#E22211', '#249991', '#E76B6B', '#FEFEFE', '#42729B', '#F6F7F2', '#E0E4CC', '#D6DAC2', '#7BB0A6', '#92F22A', '#64DDBB', '#7CEECE', '#8F6F40', '#6F532A', '#523D1F', '#A0B58D', '#A19C69', '#FD5B03', '#63393E', '#3C3741', '#8C7E51', '#54573A', '#F04903', '#FF7416', '#F29B34', '#D33257', '#3D8EB9', '#71BA51', '#FEC606', '#E75926', '#EB6361', '#EBBD63', '#6C8784', '#45362E', '#87766C', '#25373D', '#CF000F', '#E3000E', '#E6DCDB', '#D2D7D3', '#E7E7E7', '#282830', '#BADA55', '#1DABB8', '#C82647', '#FF6766', '#60646D', '#FFFFF7', '#83D6DE', '#97CE68', '#EB9532', '#EE543A', '#D8335B', '#953163', '#422E39', '#FACA9B', '#FDD09F', '#F3D89F', '#E7DF86', '#C0BA78', '#59A9C2', '#65878F', '#6E5D4B', '#6A5A15', '#61381B', '#4CD4B0', '#FFFCE6', '#EDD834', '#F24D16', '#7D1424', '#E7E7DE', '#CDCBA6', '#008891', '#00587A', '#0F3057', '#EFF4E4', '#ACA46F', '#7574A7', '#5659C9', '#D4DBC8', '#DBD880', '#F9AE74', '#CD6B97', '#557780', '#444B54', '#8199A3', '#B5AFA2', '#E1B493', '#F7D6B5', '#FF9F55', '#FF8B55', '#FF7E55', '#FADAA3', '#FF7055', '#5C9F97', '#DED7E6', '#D4AF61', '#5B2314', '#97B088', '#1F9EA3', '#F8BD97', '#3B0102', '#9E5428', '#BFB992', '#F0F1F5', '#112233', '#66CC99', '#44BBFF', '#FC575E', '#34495E', '#2980B9', '#27AE60', '#E67E22', '#ECF0F1', '#E6567A', '#BF4A67', '#3B3C3D', '#47C9AF', '#44B39D', '#462446', '#B05F6D', '#EB6B56', '#FFC153', '#47B39D', '#F7E999', '#D3EBB2', '#5B4B27', '#A42A15', '#D3E9BA', '#F2F8EA', '#6797A1', '#FABFA1', '#E3E7B1', '#ECEFA9', '#D1CD8E', '#BE8B5C', '#B86A54', '#BA5445', '#9E3E25', '#BADEB2', '#87E8C6', '#8BCBDE', '#8FA8F6', '#B0A4BE', '#203040', '#E7F76D', '#D1D6A9', '#EAF2BB', '#F7BC05', '#53DF83', '#47D2E9', '#EEEEEE', '#3F3F3F', '#D1D5D8', '#3498DB', '#F1C40F', '#E74C3C', '#1ABC9C', '#6D4B11', '#563D28', '#3F303F', '#282256', '#11156D', '#F4EDF6', '#F8D9D5', '#D8E2EC', '#F2E4F9', '#FDE1F7', '#1BBC9B', '#16A086', '#1BA39C', '#0B8389', '#0F6177', '#FCEBB6', '#5E412F', '#F07818', '#F0A830', '#78C0A8', '#776F70', '#E36937', '#BBA900', '#005057', '#E91818', '#B8B89F', '#DC9855', '#FF770B', '#816432', '#025159', '#59AE7F', '#64C4AF', '#91CED7', '#CCEBC0', '#D9F5BE', '#E3EEFF', '#E8FFFF', '#E1FAFC', '#EDF9FF', '#785EDD', '#8657DB', '#453E4A', '#9E58DC', '#AE44C8', '#9DA5A6', '#7FA66C', '#48AD01', '#C9C1FE', '#82B9AD', '#7A922D', '#722809', '#360528', '#EE7469', '#FFF0D6', '#B8959B', '#836D6F', '#383732', '#54ACD2', '#5991B1', '#5F7187', '#48569E', '#8B4D93', '#4A4E4D', '#0E9AA7', '#3DA4AB', '#F6CD61', '#FE8A71', '#6BB18C', '#ECDAAF', '#EBCB94', '#EF9688', '#DC626F', '#FE6860', '#FE8A71', '#F3C9BF', '#D9BBAE', '#0C545C', '#88F159', '#B7EF9C', '#F4FFE0', '#C9C7AF', '#4387B5', '#7D7870', '#6157D4', '#A14C10', '#10D2E5', '#81E2E6', '#93BFB6', '#977BAB', '#6F2480', '#42787A', '#409C97', '#F8E8B5', '#F0340F', '#331B17', '#34495E', '#4F8677', '#6B9B61', '#8F934D', '#B17E22', '#413333', '#48393C', '#744C40', '#98583F', '#FF7B2C', '#4D545E', '#586474', '#72CCCA', '#E2D6BE', '#BD3C4E', '#CA6769', '#F4998A', '#F0B799', '#F4D6A0', '#CDC99F', '#528CCB', '#F31D2F', '#FF8600', '#00D717', '#BF4ACC', '#B3005A', '#710301', '#8F6910', '#F1C40F', '#E67E22', '#E74C3C', '#ECF0F1', '#95A5A6', '#043D5D', '#032E46', '#0F595E', '#23B684', '#FFFFF7', '#73B1D6', '#4589B0', '#1D628B', '#444444', '#5A5A5A', '#F8F8F8', '#D6D6D6', '#72BAAC', '#EE7546', '#EE5F5B', '#F89406', '#FFF457', '#62C462', '#5BC0DE', '#ECF0F1', '#1ABC9C', '#16A085', '#2C3E50', '#E74C3C', '#7CA39C', '#7F8E8B', '#4D4D4D', '#B27257', '#FF5D19', '#455869', '#3B7E87', '#9EA97F', '#D1AA7F', '#F8BC86', '#11132F', '#263D4E', '#4A6B4E', '#918E45', '#D9983E', '#726680', '#FF520F', '#0FBAB7', '#B8B6A6', '#75536C', '#181303', '#158B93', '#031316', '#534830', '#FD8F04', '#BBB7A4', '#FFDE49', '#FF8F17', '#FFFCF5', '#FF3209', '#1C2236', '#08AAC7', '#85E2FF', '#EEFF6B', '#B30802', '#02135C', '#B7B4B6', '#0C1024', '#FEDB1D', '#E66A39', '#D04E33', '#353C3E', '#1C2021', '#EEEEEE', '#2C3E50', '#34495E', '#16A085', '#1ABC9C', '#BFE6EC', '#55C34D', '#074354', '#053542', '#02222B', '#22202B', '#383745', '#7D6962', '#CA8D6E', '#F9AE74', '#1ABC9C', '#16A085', '#ECF0F1', '#E74C3C', '#C0392B', '#1D1D29', '#6C1827', '#9E373B', '#EF5C54', '#FFE3D0', '#199EC7', '#40BC86', '#EC555C', '#FCB410', '#28A9BC', '#36C4D0', '#92DBC7', '#C6F0DA', '#FFE7C1', '#292E40', '#F7A3A2', '#F8CAC1', '#BED9DE', '#82BBC2', '#706F77', '#AA8C91', '#F1A49F', '#E2999F', '#E69896', '#BFB0A3', '#A86E3A', '#C4A956', '#02000D', '#635D4D', '#F4F5D6', '#E0D5B2', '#A38F84', '#A38F84', '#75706B', '#C4C4C4', '#706051', '#FF7300', '#A69688', '#84CCD1', '#95E7ED', '#CC4949', '#E35252', '#F75959', '#9DABA2', '#79857E', '#27332C', '#294543', '#2C5957', '#131A1E', '#1136C7', '#1C57E1', '#597DF7', '#779BF0', '#D4C6C6', '#9E1616', '#37767A', '#254F51', '#091414', '#1E272B', '#523838', '#D14841', '#DA8254', '#F2BE7B', '#216379', '#9FAB5F', '#F9F8E4', '#B58D2B', '#0F090A', '#799412', '#432522', '#396A90', '#39B4FF', '#6D0005', '#EC3013', '#200D07', '#467E8F', '#B0A297', '#FFE1AE', '#F9B32A', '#FD7150', '#FA4228', '#336E7B', '#E6C3AF', '#E9BDA4', '#AE9181', '#603838', '#82595D', '#223549', '#B52300', '#575C56', '#C97131', '#CD9C64', '#85763F', '#D28E81', '#E3D2B8', '#806C53', '#3A2C21', '#702A87', '#AEDD46', '#D71A75', '#FFDA0C', '#2FE2D9', '#0EBB9F', '#F5C700', '#F69C00', '#EF4836', '#C43829', '#004C79', '#005F97', '#3C8AB8', '#E8F4FA', '#849FBB', '#323A45', '#00AFD1', '#1FBBA6', '#F27935', '#D64541', '#A0F601', '#ECF0F1', '#768A92', '#687E87', '#5E7078', '#D3CED8', '#C2B6D6', '#AA99BA', '#867198', '#67537A', '#557780', '#D95058', '#ED939D', '#F0C2C2', '#EBE1E2', '#37465D', '#6AB0AA', '#EBF680', '#FCA65F', '#DD6F47', '#FE5A05', '#D55B06', '#985004', '#54483A', '#464A53', '#6B2623', '#E60501', '#F84902', '#FDA006', '#F7D00D', '#C0B38D', '#F3D06A', '#8D8276', '#5A999A', '#8DC0B2', '#178CA6', '#D9D7CC', '#F2BB13', '#D99F7E', '#F24130', '#EFBDA0', '#FCAB7B', '#DB9971', '#383942', '#232C3D', '#CC9194', '#F7A5A7', '#F8C0C0', '#89B2BB', '#6C9299', '#FFAB78', '#FFD380', '#B6FF75', '#72F274', '#2C544D', '#D3E6BE', '#CBE092', '#E7F1CF', '#EFF7E0', '#DDE6D6', '#B4C248', '#6B5636', '#DB8D17', '#F0A703', '#F3D646', '#F6FAE8', '#C71313', '#F2F3ED', '#EAEBD9', '#CACEAD', '#AC6A5A', '#23221E', '#2E8A9C', '#E2AE80', '#688D9B', '#804829', '#8B8B8B', '#BFCC5A', '#9DC24E', '#7B806B', '#DEB48A', '#FFC8A6', '#FEFCFF', '#B5B09C', '#CF352B', '#0A2037', '#072527', '#3F3067', '#BB1F5C', '#E2A743', '#B43024', '#A72154', '#3BA8A5', '#E27E1C', '#A2C648', '#853870', '#F0F0F0', '#C8CDD2', '#B4B9C3', '#647387', '#AF7F4B', '#40A7A0', '#4ECDC4', '#C7F464', '#FF6B6E', '#9C410A', '#CE8948', '#735E67', '#90A5BA', '#4B5942', '#0A0A0A', '#0F0F0F', '#1A1A1A', '#A0A0A0', '#F0F0F0', '#A15E5E', '#F85066', '#FFCA0C', '#C61357', '#E0C3A5', '#010035', '#47263B', '#B66E1E', '#F58F4B', '#B79471', '#D6BFA5', '#09557A', '#592339', '#981066', '#C25396', '#B1DCC8', '#B73B7A', '#EED0B8', '#DDB68B', '#CF6991', '#2DCC70', '#27AE61', '#33A828', '#349935', '#41A35B', '#3897D9', '#59BCFB', '#F2F1EF', '#64D98A', '#5ECA7F', '#BE90D4', '#F0856F', '#F9BF3B', '#F7D93B', '#5AD4BC', '#3F3F3F', '#F2F2F2', '#FFD91E', '#AA61CE', '#ED5784', '#EBECE7', '#52645E', '#639C89', '#96D4BF', '#F57979', '#0C555C', '#2E928A', '#CCDFCC', '#FF6861', '#EB524A', '#27D0B9', '#F5F5F5', '#CCCCCC', '#432E41', '#3BC391', '#2F79C3', '#374047', '#EB4549', '#F8F2E2', '#FF7F5F', '#FFA75E', '#B7FF5E', '#92D690', '#708C7F', '#2C214D', '#DAE9BD', '#E32F6C', '#B63165', '#9C215F', '#4193A6', '#84B4BF', '#F2EBC9', '#D9CB84', '#8C7F3F', '#FA7535', '#494D4B', '#45B739', '#04DDAC', '#D4CD9D', '#153E63', '#A9D3AA', '#D1E0A6', '#CEEB43', '#D4BF21', '#10806E', '#F1ECC8', '#F6A011', '#E76037', '#AB3F3F', '#F59500', '#FFB836', '#F4D35D', '#6090A8', '#424D53', '#1C252E', '#3D2A2A', '#302823', '#332A17', '#273325', '#3A6E7A', '#C7C398', '#CE7D16', '#573A4C', '#393B4E', '#0F0012', '#21040F', '#2B0B0B', '#331D12', '#382E1B', '#A38149', '#D9BE93', '#7E9E92', '#1C2924', '#291D1C', '#8EB89F', '#7A7A16', '#6CC0BF', '#B3BB19', '#D8B133', '#CA5F71', '#786048', '#C0A878', '#F0D8A8', '#909060', '#484830', '#F10E29', '#0A710A', '#E51A31', '#E8253D', '#097109', '#FF5A1E', '#401457', '#3F4259', '#166670', '#7A9FBF', '#4F4F4F', '#0A7379', '#5BA38B', '#DDF075', '#F8D474', '#DFB7AD', '#8A97C4', '#C878AB', '#EEC3D6', '#D6C0CE', '#919188', '#919140', '#9E6C36', '#AB6147', '#65888C', '#FBCF76', '#BC8657', '#615A4A', '#29251C', '#3D3020', '#F5CD3C', '#DACDB6', '#BFB095', '#E8BF79', '#F3A929', '#D2BAA2', '#AEA294', '#98A2A4', '#E6C3C1', '#988C8E', '#00A49A', '#9F0088', '#BEAE00', '#E6EBB8', '#00101C', '#A29679', '#D5C190', '#E3B445', '#CE9D27', '#BA870E', '#48493B', '#646152', '#CEBCA8', '#CEABA5', '#92787B', '#74A6CC', '#A5CAE6', '#E3D081', '#8BB7D9', '#5692BF', '#112885', '#3A5194']
hexo.extend.helper.register('random_color_templatte', function (min, max) {
  min = min || 0
  max = max || 255
  return shuffle(randomColor.filter((c) => {
    var b = getBrightness(c)
    return b >= min && b <= max
  }))
})

var rainbowColor = ['#795548', '#ff5722', '#ff9800', '#ffc107', '#ffeb3b', '#cddc39', '#8bc34a', '#4caf50', '#009688', '#00bcd4', '#03a9f4', '#2196f3', '#3f51b5', '#673ab7', '#9c27b0', '#e91e63', '#f44336']
hexo.extend.helper.register('rainbow_color_templatte', function () {
  return rainbowColor.concat()
})

hexo.extend.helper.register('hash_code', function (str) {
  var hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash)
})

function shuffle (array) {
  var currentIndex = array.length
  var temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function getBrightness (hexColor) {
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexColor)) { return }

  var c = hexColor.substring(1)    // strip #
  if (c.length === 4) {
    c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]
  }

  var rgb = parseInt(c, 16)   // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff  // extract red
  var g = (rgb >> 8) & 0xff   // extract green
  var b = (rgb >> 0) & 0xff   // extract blue

  return 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
  // dark - light 0 - 255
}
