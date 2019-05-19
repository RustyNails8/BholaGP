from graphics import *

def main():
    win = GraphWin("My Two Lines", 100, 100)
    l1 = Line(Point(10,30), Point(20,40))
    l2 = Line(Point(10,20), Point(50,90))
    l1.draw(win)
    l2.draw(win)
    win.getMouse() # pause for click in window
    win.close()

main()