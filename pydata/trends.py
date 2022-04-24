from pytrends.request import TrendReq

pytrend = TrendReq()

# def get_comp_value(keyword : str) -> int:
#     pytrend.build_payload(kw_list=["Karate", keyword])
    
#     df = pytrend.interest_over_time()

def get_popularity_value(keyword : str) -> int:
    # the first value normalizes the popularity output of keyword
    pytrend.build_payload(kw_list=["Ceramics", keyword])

    df = pytrend.interest_by_region(resolution='COUNTRY', inc_low_vol=True, inc_geo_code=False)

    us_val = df.loc["United States"].values
    pop = -1

    # for when the str is repeated in values which only return one index
    if len(us_val) > 1:
        pop = df.loc["United States"].values[1]
    elif len(us_val) == 1:
        pop = df.loc["United States"].values[0]

    print(f"us_val = {us_val}; fin pop: {keyword}, {pop}")
    return int(pop)
