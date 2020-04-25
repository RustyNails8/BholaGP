from graphics import *

def main():
    win = GraphWin("My Two Lines", 100, 100)
    l1 = Line(Point(10,30), Point(70,30))
    l2 = Line(Point(10,40), Point(70,40))
    l3 = Line(Point(10,50), Point(70,50))
    l1.draw(win)
    l2.draw(win)
    l3.draw(win)
    win.getMouse() # pause for click in window
    win.close()

main()