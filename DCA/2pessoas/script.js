const btn =document.querySelector("#send");


/* CNDT */
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const cpf = document.querySelector("#cpf");
    
    
    const cndt = document.querySelector("#cndt")
    const ecndt = document.querySelector("#ecndt")
    const vcndt = document.querySelector("#vcndt")
    const cnat = document.querySelector("#cnat")
    const ecnat = document.querySelector("#ecnat")
    const rf = document.querySelector("#rf")
    const erf = document.querySelector("#erf")
    const vrf = document.querySelector("#vrf")
    const re = document.querySelector("#re")
    const ere = document.querySelector("#ere")
    const vre = document.querySelector("#vre")
    const regiao = document.querySelector("#regiao")
    const eregiao = document.querySelector("#eregiao")
    const regiaoc = document.querySelector("#regiaoc")
    
    const cpfp = cpf.value;
    const nomep = name.value;
    const cndtn = cndt.value
    const ecndtn = ecndt.value
    const vcndtn = vcndt.value
    const cnatn = cnat.value
    const ecnatn = ecnat.value
    const rfn = rf.value
    const erfn = erf.value
    const vrfn = vrf.value
    const ren = re.value
    const eren = ere.value
    const vren = vre.value
    const regiaon = regiao.value
    const eregiaon = eregiao.value
    const regiaocn = regiaoc.value
    /*2PESSOAS*/
    const name2 = document.querySelector("#name2");
    const cpf2 = document.querySelector("#cpf2");
    
    
    const cndt2 = document.querySelector("#cndt2")
    const cnat2 = document.querySelector("#cnat2")
    const rf2 = document.querySelector("#rf2")
    const re2 = document.querySelector("#re2")
    const regiao2 = document.querySelector("#regiao2")
    const regiaoc2 = document.querySelector("#regiaoc2")
    
    const cpfp2 = cpf2.value;
    const nomep2 = name2.value;
    const cndtn2 = cndt2.value
    const cnatn2 = cnat2.value
    const rfn2 = rf2.value
    const ren2 = re2.value
    const regiaon2 = regiao2.value
    const regiaocn2 = regiaoc2.value
    
    
    texto.innerHTML = ("b)- Certid??o negativa de d??bitos trabalhistas - CNDT sob n?? "+cndtn+" para o CPF n?? "+cpfp+" em nome de "+nomep+" e n?? "+cndtn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", emitidas gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecndtn+", v??lidas at?? "+vcndtn+"; c)- Certid??o negativa de a????es trabalhistas do 1?? Grau, do Tribunal Regional do Trabalho da 9?? Regi??o, sob n?? "+cnatn+" para o CPF n?? "+cpfp+" em nome de "+nomep+" e n?? "+cnatn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+",, emitidas gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecnatn+", v??lidas por 30 dias; d)- Certid??o negativa de d??bitos relativos aos tributos federais e ?? d??vida ativa da Uni??o, com o c??digo de controle "+rfn+" para o CPF n?? "+cpfp+" em nome de "+nomep+" e "+rfn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", emitidas gratuitamente, via internet, pelo Minist??rio da Fazenda, Secretaria da Receita Federal do Brasil, Procuradoria-Geral da Fazenda Nacional, em "+erfn+", v??lidas at?? "+vrfn+", a qual teve sua autenticidade confirmada e fica arquivada ??s folhas XXX, na Pasta de Arquivo de CND n?? XXX, neste Tabelionato; e)- Certid??o negativa de d??bitos tribut??rios e de d??vida ativa estadual, sob n?? "+ren+" para o CPF n?? "+cpfp+" em nome de "+nomep+" e n?? "+ren2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", emitidas via internet, pela Secretaria de Estado da Fazenda, Receita Estadual do Paran??, em "+eren+", v??lidas at?? "+vren+"; f)- Certid??es negativas de distribui????o de a????es e execu????es c??veis e fiscais, e de execu????es criminais da Justi??a Federal da 4?? regi??o, sob o n?? "+regiaon+" e "+regiaocn+" para o CPF n?? "+cpfp+" em nome de "+nomep+" e n?? "+regiaon2+" e "+regiaocn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", emitidas via internet, em "+eregiaon+";")

    /*console.log( "Certid??o negativa de d??bitos trabalhistas - CNDT sob n?? "+cndtn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitida gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecndtn+", v??lida at?? "+vcndtn+";");
    console.log( "Certid??o negativa de a????es trabalhistas do 1?? Grau, do Tribunal Regional do Trabalho da 9?? Regi??o, sob n?? "+cnatn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitida gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecnatn+", v??lida por 30 dias;");
    console.log( "Certid??o negativa de d??bitos relativos aos tributos federais e ?? d??vida ativa da Uni??o, com o c??digo de controle "+rfn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitida gratuitamente, via internet, pelo Minist??rio da Fazenda, Secretaria da Receita Federal do Brasil, Procuradoria-Geral da Fazenda Nacional, em "+erfn+", v??lida at?? "+vrfn+"; a qual teve sua autenticidade confirmada e fica arquivada ??s folhas XXX, na Pasta de Arquivo de CND n?? XXX, neste Tabelionato");
    console.log( "Certid??o negativa de d??bitos tribut??rios e de d??vida ativa estadual, sob n?? "+ren+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitidas via internet, pela Secretaria de Estado da Fazenda, Receita Estadual do Paran??, em "+eren+", v??lida at?? "+vren+";");
    console.log( "Certid??es negativas de distribui????o de a????es e execu????es c??veis e fiscais, e de execu????es criminais da Justi??a Federal da 4?? regi??o, sob o n?? "+regiaon+" e "+regiaocn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitidas via internet, em "+eregiaon+";");*/

})


let texto = document.querySelector("#texto")

