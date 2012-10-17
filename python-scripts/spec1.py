#coding=utf8

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
import unittest, time, re

class EPostaAdresiGirilmemisse(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.implicitly_wait(30)
        self.base_url = "http://sonsuzdongu.github.com/"
        self.verificationErrors = []
    
    def test_e_posta_adresi_girilmemisse(self):
        driver = self.driver
        driver.get(self.base_url + "/owtg-2012-selenium/")
        driver.find_element_by_id("emailField").clear()
        driver.find_element_by_id("emailField").send_keys("")
        driver.find_element_by_css_selector("input[type=\"submit\"]").click()
        self.assertEqual(u"Lütfen bir e-posta adresi girin", driver.find_element_by_id("messages").text)
    
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException, e: return False
        return True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
