# This example uses Python Requests library http://docs.python-requests.org/en/master/
import requests
import json

new_apps_in = [
    'com.indialends.android',
    'com.nirafinance.customer',
    'com.capitalfirst',
    'com.earlysalary.android',
    'in.rebase.app',
    'com.afinoz',
    'in.zestmoney.android.zestlife',
    'in.epaylater.android.consumer',
    'in.loantap.app',
    'in.credy.borrowerapp.full',
]

new_apps_ng = [
    'io.quickcheck.loans',
    'com.loan.cash.credit.okash.nigeria',
    'com.lenddo.mobile.paylater',
    'com.xcredit.loan.nigeria',
    'com.imoney.credit.nira',
]
new_apps_ke = [
    'com.kopakash.mobile',
    'com.pesazone.mobile',
]

app_ids = [
    'com.inventureaccess.safarirahisi', # KE
    'craftsilicon.barclays',
    'com.oplay.microloan.kenya',
    'com.branch_international.branch.branch_demo_android',
    'com.xgo.credit',
    'com.zenkafinance.microloans',
    'com.berry.berryapp',
    'greenshoe.com.fulani',
    'com.saida.lite',
    'com.kopakash',
    'com.okoleainternational.okoleamobile',
    'com.opesa.microloan.kenya',
    'com.roamtech.dm.azima',
    'com.berry.berryapp',
    'com.fullstack.hikash',
    'ke.pesachap.pl.jk',
    'ke.co.equitybank.equitel',
    'pk.com.telenor.phoenix', # PK
    'com.techlogix.mobilinkcustomer',
    'com.tez.androidapp',
    'com.enova.cashnet', # US
    'com.moneylion',
    'tsc.loandayusa.com',
    'com.tigerfinancial.mobile.speedycash',
    'com.dave',
    'ng.com.fairmoney.fairmoney', # NG
    'com.nigeria.soko',
    'com.zedcrest.android.moneypal.v2',
    'com.aella.comportal',
    'com.transsnetfinancial.palmcredit',
    'com.atl.anytimeloan', # IN
    'in.atome',
    'com.flexsalary',
    'co.tslc.cashe.android',
    'com.rupeelend.rupeelend',
    'com.mpokket.app',
    'in.credy.borrowerapp.full',
    'com.indiaBulls',
    'com.goupwards',
    'com.kreditbee.android',
    'com.mycash.moneytap.app',
    'com.portal.hcin',
    'com.stashfin.android',
    'com.citrus.citruspay',
    'io.attabot.app.paymeindia',
    'com.gopaysense.android.boost',
    'com.whizdm.moneyview.loans',
    'org.altruist.BajajExperia',
    'mx.com.tala', # MX
    'id.co.myhomecredit', # ID
    'ph.com.tala', # PH
    'ph.fk.pondoloan',
    'ph.pondopeso.mnl.jk',
    'ph.kreditpintar',
    'com.pesoloan',
    'com.loan.cash.credit.easy.peso.fast.lending.tala.pera',
    'ph.homecredit.myhomecredit',
]

def write_to_file(filename, data):
  with open(filename, 'w') as file:
    file.write(data)
    file.close()

def appmonsta():
    # Request Parameters
    store = "android"  # Could be either "android" or "itunes".
    country_code = "US"  # Two letter country code.
    app_id = "com.mutaidev.bbi"  # Unique app identifier (bundle ID).

    req_params = {"country": country_code}

    # Auth Parameters
    username = "ecf74694f7f70ee6532290f5f6cd9f69daff8fb6"  # Replace {API_KEY} with your own API key.
    password = "X"  # Password can be anything.

    # Request URL
    request_url = f"https://api.appmonsta.com/v1/stores/{store}/details/{app_id}.json"

    # This header turns on compression to reduce the bandwidth usage and transfer time.
    headers = {'Accept-Encoding': 'deflate, gzip'}

    # Python Main Code Sample
    response = requests.get(request_url,
                            auth=(username, password),
                            params=req_params,
                            headers=headers,
                            stream=True)

    print(response.status_code)
    for line in response.iter_lines():
        # Load json object and print it out
        json_record = json.loads(line)
        print(json_record)


def rapidapi():
    headers = {
        'x-rapidapi-host': 'apk-downloader1.p.rapidapi.com',
        'x-rapidapi-key': '9c97268d8cmshb7131cbfe816301p11326djsna400d1fa3663',
        'androidid': '',
        'country': 'us',
        'lang': 'en',
        'useragent':
        'Android-Finsky/14.3.18-all (versionCode=81431800,sdk=19,device=hammerhead,hardware=hammerhead,product=hammerhead,build=KTU84P:user)',
        'password': '',
        'username': '',
    }

    request_url = 'https://apk-downloader1.p.rapidapi.com/'

    responses = []
    print('START!!!\n')

    for app_id in app_ids:
        print(app_id)
        req_params = {'id': app_id}
        # req_params = {'id': 'com.mutaidev.bbi'}
        response = requests.get(request_url,
                                params=req_params,
                                headers=headers,
                                stream=True)
        res = response.json()
        res['id'] = app_id
        responses.append(res)
    if len(responses) == len(app_ids):
        write_to_file('data.json', json.dumps(responses))
        print('DONE!!!')

if __name__ == "__main__":
    rapidapi()
