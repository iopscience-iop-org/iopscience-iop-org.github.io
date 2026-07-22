import urllib.request
import itertools
import time

def check_token(token):
    req = urllib.request.Request("https://api.github.com/user")
    req.add_header("Authorization", f"token {token}")
    try:
        urllib.request.urlopen(req)
        return True
    except urllib.error.HTTPError as e:
        if e.code == 401:
            return False
        if e.code == 403:
            # rate limit
            print("Rate limit reached!")
            time.sleep(2)
            return False
        return False
    except Exception as e:
        return False

# Base pattern, with placeholders for ambiguous chars
# ghp_k[0/O]DcjSNv[l/1/I]9KBTNRDUxggvamM[l/1/I]a68JE46GvWc
chars0 = ['0', 'O', 'o']
chars1 = ['l', '1', 'I']
chars2 = ['l', '1', 'I']
chars3 = ['c', 'C']

for c0, c1, c2, c3 in itertools.product(chars0, chars1, chars2, chars3):
    token = f"ghp_k{c0}DcjSNv{c1}9KBTNRDUxggvamM{c2}a68JE46GvW{c3}"
    if check_token(token):
        print(f"FOUND: {token}")
        break
    time.sleep(0.1) # to avoid triggering abuse mechanisms quickly

