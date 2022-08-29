#!/usr/bin/env python
# coding: utf-8

# # Importing Libraries

# In[5]:


import pandas as pd
import numpy as np


# In[6]:


pd.__version__


# In[8]:


wasteful_string = "     9:00PM     "
unwasteful_string = wasteful_string.strip()
unwasteful_string


# In[9]:


scientist = 'albert einstein'
proper_name = scientist.title()
proper_name


# # Series

# In[10]:


ice_cream = ["Chocolate", "Vanilla", "Strawberry"]
pd.Series(ice_cream)


# In[12]:


sushi = {
    "Salmon": "Orange",
    "Tuna": "Red",
    "Eel": "Brown"
}
pd.Series(sushi)


# In[17]:


prices = pd.Series([2.99, 4.45, 1.36])
prices


# In[18]:


prices.sum()


# In[19]:


prices.product()


# In[20]:


prices.mean()


# In[27]:


fruits = ["Apple", "Orange", "Plum", "Grape", "Blueberry", "Watermelon"]
weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Monday"]


# In[28]:


pd.Series(data=fruits, index=weekdays, name="fruitdays")


# In[45]:


pokemon = pd.read_csv("pokemon.csv", usecols=["Pokemon"]).squeeze("columns")
google = pd.read_csv("google_stock_price.csv", usecols=["Stock Price"]).squeeze("columns")


# In[46]:


pokemon


# In[47]:


google


# In[48]:


google.head(3)


# In[50]:


len(pokemon), len(google)


# In[52]:


type(pokemon), type(google)


# In[53]:


dir(pokemon) # attributes and methods available for pokemon obj


# In[54]:


sorted(pokemon)


# In[55]:


list(pokemon)


# In[56]:


dict(pokemon)


# In[60]:


pokemon.sort_values().head()


# In[65]:


google.sort_values(ascending=False).tail()


# In[68]:


50.74 in google.values


# In[69]:


"Blastoise" in pokemon.values


# In[72]:


pokemon[0]


# In[74]:


pokemon[len(pokemon)-1]


# In[75]:


pokemon[27:35]


# In[76]:


pokemon[700:]


# In[80]:


pokemon[-1:]


# In[82]:


# pokemon[-1] will error


# In[83]:


pokemon[0]


# In[113]:


pokemon = pd.read_csv("pokemon.csv", index_col="Pokemon").squeeze("columns")


# In[114]:


pokemon[[100, 134]]


# In[115]:


pokemon["Bulbasaur"]


# In[116]:


pokemon[["Charizard", "Jolteon", "Meowth"]]


# In[117]:


pokemon.head()


# In[118]:


pokemon.get(0)


# In[119]:


pokemon.get("Bulbasaur")


# In[120]:


print(pokemon.get("Digimon", "not found"))


# In[121]:


print(pokemon.get(["Bulbasaur", "Meowth"], "not found"))


# In[123]:


pokemon.head()


# In[124]:


pokemon[0] ="Borisaur"
pokemon[0]


# In[107]:


pokemon[[1, 2, 4]] = ["Fire", "Flame", "Blaze"]


# In[108]:


pokemon


# In[109]:


pokemon["Bulbasaur"] = "Grass"


# In[110]:


pokemon


# In[138]:


pokemon_df = pd.read_csv("pokemon.csv", usecols=["Pokemon"])


# In[139]:


pokemon_series = pokemon_df.squeeze("columns").copy()
pokemon_series


# In[140]:


pokemon_series[0] = "Whatever"


# In[141]:


pokemon_series


# In[142]:


pokemon_df


# In[153]:


google =(
    pd.read_csv("google_stock_price.csv", usecols=["Stock Price"])
    .squeeze("columns")
    .copy()
)


# In[154]:


google


# In[155]:


google = google.sort_values()


# In[156]:


google


# In[157]:


google.describe()


# In[158]:


google + 10


# In[160]:


google * 2


# In[162]:


pokemon = pd.read_csv("pokemon.csv", index_col = "Pokemon").squeeze("columns")
pokemon


# In[169]:


pokemon.value_counts(normalize=True) * 100


# In[170]:


pokemon


# In[172]:


pokemon.apply(len)


# In[175]:


def rank_pokemon(pokemon_type):
    if pokemon_type in ["Grass", "Fire", "Water"]:
        return "Classic"
    elif pokemon_type  == "Normal":
        return "Boring"
    else:
        return "TBD"


apply_pokemon = pokemon.apply(rank_pokemon)


# In[176]:


apply_pokemon.value_counts()


# In[177]:


mappings = {
    "Grass": "Classic", 
    "Fire": "Classic", 
    "Water": "Classic",
    "Normal": "Boring"
}


# In[178]:


pokemon.map(mappings)


# In[181]:


mappings_series = pd.Series(mappings)
mappings_series


# In[182]:


pokemon.map(mappings_series)


# In[ ]:




