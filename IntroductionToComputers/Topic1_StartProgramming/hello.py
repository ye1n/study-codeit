# 1. 파이썬 첫 걸음

# 01. 우리가 사용할 도구들

# 1-1 Python interpreter 란 ?
# Python code를 Computer가 이해할수있는
# Machine Code로 변역 해주는 프로그램

# 1-2 PyCharm = 올인원 솔루션
# 통합 개발 환경 (IDE)

# 05. print 사용해 보기
print("Hello world!")

# 2. 프로그래밍 기본 개념
# 프로그래밍이란 : 계산할 수식들을 컴퓨터에게 알려주는 것

# 01. 코멘트 (# 주석)
# 복잡한 코드 설명, 하다가 만 부분 표시, 다른 개발자와 협업시 소통

# 02. 자료형 개요
# 2-1 숫자형
# 정수(Integer) : -2, -1, 0, 1, 2, 3
# 실수(Floating Point) : 1.3, 3.8, -2.7

# 2-2 문자열 (String)
print("Hello" + "world")

# 2-3 불린(Boolean) : 참과 거짓
print(7 > 3) # 결과 : True
print(3 > 7) # 결과 : False

# 03. 추상화 개요
# 추상화 : 복잡한 내용은 숨기고, 주요 기능에만 신경 쓰는 것

# 변수 (Variable) : 값을 저장하는 것
x = 254
y = 317
print(x + y)

# 함수 (Function) : 명령을 저장하는 것

# 04. 변수
burger_price = 4990
fries_price = 1490
drink_price = 1250

print(burger_price)
print(burger_price * 2)
print(burger_price + fries_price)
print(burger_price * 3 + fries_price * 2 + drink_price * 5)

# 05. 실습과제 : 칼로리 계산기

kitkat = 190
oreos = 502
pringles = 292
twix = 135.9
cheetos = 485

# 다양한 과자 조합
print(kitkat + oreos * 2)
print(cheetos * 4)
print(pringles + oreos + twix)
print(pringles * 3 + oreos * 2)

# 06. 함수

def hello():
    print("Hello")
    print("Welcome to Codeit!")

hello()

# 07. 실습과제 : 카페 모카 레시피

def cafe_mocha_recipe():
    print("1. 준비된 컵에 초코 소스를 넣는다.")
    print("2. 에스프레소를 추출하고 잔에 부어 준다.")
    print("3. 초코 소스와 커피를 잘 섞어 준다.")
    print("4. 거품기로 우유 거품을 내고, 잔에 부어 준다.")
    print("5. 생크림을 얹어 준다.")

cafe_mocha_recipe()

# 08. 파라미터
def hello(name):
    print("Hello!!")
    print(name)
    print("Welcome to Codeit!!")

hello("Chirs")

# 09. 여러 개의 파라미터
def hello(a, b, c): # 파라미터 이름도 자유롭게 지을 수 있다.
    print(a + b + c)

hello(7, 3, 2)

# 10. 실습과제 : 세 수의 곱
# 세 수의 곱을 알려주는 프로그램 작성
def multiply_three_numbers(a,b,c):
    print(a*b*c)
multiply_three_numbers(1,2,3)

# 11. return문
# 파라미터 : 함수에 넘겨 주는 값
# 함수의 return : 함수에게 어떤 정보를 주면 어떤 값을 돌려 준다
def get_square(x):
    return x * x
y = get_square(3)
print(y)

def get_square(x):
    return x * x

print(get_square(3) + get_square(4))