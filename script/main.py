import random as rd
USER = [
    "RAPHAEL",
    "JULIEN",
    "EMILIE",
    "JULIE",
    "CHARLES",
    "MICHEL",
    "JEAN"
]
tmp_user = USER.copy()

def get_random_user(all_user):
    u = rd.choice(all_user)
    all_user.remove(u)
    return u

while tmp_user:
    u = get_random_user(tmp_user)
    print(u)